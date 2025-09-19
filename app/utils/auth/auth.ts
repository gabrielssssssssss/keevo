export function AuthHandler() {
    const credentials = localStorage.getItem("JWT_TOKEN");
    if (credentials == null) {
        return false;
    }
    return true;
}

export async function PasswordHandler(password:string) {
    if (password.length >= 12 && password.length < 64) {
        if (await StoledVerify(password)) {
            return false;
        }
        if (!SyntaxVerify(password)) {
            return false;
        }
        if (!HashedPassword(password)) {
            return false
        }
        return true;
    }
    return false;
}

async function HashedPassword(password:string) {
    const responseCreate = await fetch("/api/password/create", {
        method: "POST",
        body: JSON.stringify({"password": password})
    });
    const dataCreate = await responseCreate.json();

    const responseVerify = await fetch("/api/password/verify", {
        method: "POST",
        body: JSON.stringify({"password": password, "hashedPassword": dataCreate["hashedPassword"]})
    });
    const dataVerify = await responseVerify.json();
    return Boolean(dataVerify["isValid"])
}

function SyntaxVerify(password:string) {
    let lower, upper, digits, special = false;

    function IsLower(char:string) {
        return Boolean(char === char.toLowerCase() && char !== char.toUpperCase());
    }
    function IsUpper(char:string) {
        return Boolean(char === char.toUpperCase() && char !== char.toLowerCase());
    }
    function IsSpecial(char:string) {
        return ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?', '`', '~'].includes(char);
    }
    function IsDigits(char: string) {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(char));
    }

    for (const element of password) {
        if (!lower) {
            lower = IsLower(element);
        }
        if (!upper) {
            upper = IsUpper(element);
        }
        if (!digits) {
            digits = IsDigits(element);
        }
        if (!special) {
            special = IsSpecial(element);
        }
    }

    if (lower == true && upper == true && digits == true && special == true) {
        return true;
    }
    return false;
}

async function StoledVerify(password:string) {
    const response = await fetch("/api/disclosed", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({password})
    });
    if (!response.ok) {
        return false;
    }
    const data = await response.json();
    return data["success"];
}