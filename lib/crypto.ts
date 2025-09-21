export async function newHash(password: string, context: string) {
    try {
        const responseCreate = await fetch("/api/auth/hashPassword", {
            method: "POST",
            body: JSON.stringify({"password": password, "context": context})
        });
        const dataCreate = await responseCreate.json();
        return dataCreate["hashedPassword"];
    } catch {
        return false;
    }
}

export async function verifyHash(password: string, hashedPassword: string) {
    try {
        const response = await fetch("/api/auth/verifyPassword", {
            method: "POST",
            body: JSON.stringify({"password": password, "hashedPassword": hashedPassword})
        });
        const data = await response.json();
        return data["isValid"];
    } catch {
        return false;
    }
}