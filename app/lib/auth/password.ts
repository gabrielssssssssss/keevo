export async function HashedPassword(password: string) {
    try {
        const responseCreate = await fetch("/api/password/create", {
            method: "POST",
            body: JSON.stringify({"password": password})
        });
        const dataCreate = await responseCreate.json();
        return dataCreate["hashedPassword"];
    } catch {
        return false;
    }
}

export async function VerifyPassword(password: string, hashedPassword: string) {
    try {
        const response = await fetch("/api/password/verify", {
            method: "POST",
            body: JSON.stringify({"password": password, "hashedPassword": hashedPassword})
        });
        const data = await response.json();
        return data["isValid"];
    } catch {
        return false;
    }
}