export function syntaxVerify(password: string) {
    let lower, upper, digits, special = false;

    function isLower(char: string) {
        return Boolean(char === char.toLowerCase() && char !== char.toUpperCase());
    }
    function isUpper(char: string) {
        return Boolean(char === char.toUpperCase() && char !== char.toLowerCase());
    }
    function isSpecial(char: string) {
        return ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?', '`', '~'].includes(char);
    }
    function isDigits(char: string) {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(char));
    }

    for (const element of password) {
        if (!lower) { lower = isLower(element); }
        if (!upper) { upper = isUpper(element); }
        if (!digits) { digits = isDigits(element); }
        if (!special) { special = isSpecial(element); }
    }

    if (lower == true && upper == true && digits == true && special == true) {
        return true;
    }
    return false;
}

export async function stoledVerify(password: string) {
    try {
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
        const { success } = await response.json();
        return Boolean(success);
    } catch {
        return false;
    }
}

export async function jsonToCsv<T extends Record<string, unknown>>(payload: T[]) {
    let csv = "";
    const headers = Object.keys(payload[0]);
    csv += headers.join(",") + "\n";
    payload.forEach(obj => {
        const values = headers.map(header => String(obj[header as keyof T] ?? ""));
        csv += values.join(",") + "\n";
    });
    return csv;
}
