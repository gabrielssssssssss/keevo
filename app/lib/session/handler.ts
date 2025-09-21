export async function NewSession(password: string) {
    const response = await fetch("/api/session/new", {
        method: "POST",
        body: JSON.stringify({"password": password})
    });
    const data = await response.json();
    console.log(data);
}