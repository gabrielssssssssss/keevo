export async function newHash(password: string, context: string) {
    try {
        const responseCreate = await fetch("/api/auth/digest/hash", {
            method: "POST",
            body: JSON.stringify({"password": password, "context": context})
        });
        const { hashedPassword } = await responseCreate.json();
        return hashedPassword;
    } catch {
        return false;
    }
}

export async function verifyHash(password: string, hashedPassword: string) {
    try {
        const response = await fetch("/api/auth/digest/verify", {
            method: "POST",
            body: JSON.stringify({"password": password, "hashedPassword": hashedPassword})
        });
        const { isValid } = await response.json();
        return isValid;
    } catch {
        return false;
    }
}

