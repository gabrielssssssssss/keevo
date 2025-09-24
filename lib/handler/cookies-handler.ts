import * as jose from "jose";
import { getSession } from "@/lib/handler/session-handler";

//Route: /api/session/new/route.ts
export async function EncryptJwt() {
    try {
    const secret = getSession();
    const jwt = await new jose.EncryptJWT({ hasAccess: true })
    .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
    .setIssuedAt()
    .setIssuer("keevo-inc")
    .setAudience("electron-app")
    .setExpirationTime("48h")
    .encrypt(secret)
    return jwt;
    } catch (e) {
        return (e as Error).message;
    };
}

//Route: /api/session/verify/route.ts
export async function DecryptJWT(jwtToken: string) {
    try {
        const { payload, protectedHeader } = await jose.jwtDecrypt(jwtToken, getSession(), {
            issuer: "keevo-inc",
            audience: "electron-app"
        });
        return Boolean(payload["hasAccess"]);
    } catch (e) {
        return (e as Error).message;
    };
}