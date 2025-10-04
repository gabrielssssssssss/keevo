import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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
    return [lower, upper, digits, special];
}

export function generatePassword() {
    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~µ";
    let password = "";
    password = "";
    while (true) {
        if (password.length >= 16) {
            if (syntaxVerify(password)) {
                return password;
            };
            password += char[Math.floor(Math.random() * char.length)];
        };
        password += char[Math.floor(Math.random() * char.length)];
    };
};

export function parseUrl(input: string): { url: string, originUrl: string } {
    let url = input.trim();
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }
    const u = new URL(url);
    return {
        url,
        originUrl: u.hostname
    };
}

// export async function jsonToCsv<T extends Record<string, unknown>>(payload: T[]) {
//     let csv = "";
//     const headers = Object.keys(payload[0]);
//     csv += headers.join(",") + "\n";
//     payload.forEach(obj => {
//         const values = headers.map(header => String(obj[header as keyof T] ?? ""));
//         csv += values.join(",") + "\n";
//     });
//     return csv;
// }