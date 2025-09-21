"use server";

//Route: /api/(integrations)/disclosed.ts
export async function leakCheck(password: string) {
    const response = await fetch(`https://leakcheck.net/api/public?key=49535f49545f5245414c4c595f4150495f4b4559&check=${password}`)
    const data = await response.json();
    return data["success"];
}