export async function Hash(password: string) {
    try {
        const responseCreate = await fetch("/api/hash/create", {
            method: "POST",
            body: JSON.stringify({"element": password})
        });
        const dataCreate = await responseCreate.json();
        return dataCreate["hashedElement"];
    } catch {
        return false;
    }
}

export async function VerifyHash(password: string, hashedPassword: string) {
    try {
        console.log(password, " ", hashedPassword)
        const response = await fetch("/api/hash/verify", {
            method: "POST",
            body: JSON.stringify({"element": password, "hashedElement": hashedPassword})
        });
        const data = await response.json();
        return data["isValid"];
    } catch (e){
        console.log(e)
        return false;
    }
}