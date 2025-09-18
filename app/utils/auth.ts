import { spec } from "node:test/reporters";

export function AuthHandler() {
    const credentials = localStorage.getItem("credentials");
    if (credentials == null) {
        return false
    }
    return true
}

export async function PasswordHandler(password:string) {
    if (password.length >= 12 && password.length < 32) {
        if (await StoledVerify(password)) {
            return false;
        }
        console.log("Syntaxe checkedd: ",SyntaxVerify(password))
        return true;
    }
    return false;
}

function SyntaxVerify(password:string) {
    let lower, upper, special = false

    function IsLower(char:string) {
        return Boolean(char === char.toLowerCase() && char !== char.toUpperCase());
    }
    
    function IsUpper(char:string) {
        return Boolean(char === char.toUpperCase() && char !== char.toLowerCase());
    }

    function IsSpecial(char:string) {
        return ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?', '`', '~'].includes(char);
    }

    for (const element of password) {
        if (!lower) {
            lower = IsLower(element);
        }
        if (!upper) {
            upper = IsUpper(element);
        }
        if (!special) {
            special = IsSpecial(element);
        }
    }
    console.log(lower, upper, special)
    if (lower == true && upper == true && special == true) {
        return true
    }
    return false
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