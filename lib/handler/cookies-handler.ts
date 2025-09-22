import * as jose from "jose";
import { getSession } from "./session-handler";

//Route: /api/session/new/route.ts
export async function EncryptJwt() {
    const secret = getSession();
    const jwt = await new jose.EncryptJWT({ hasAccess: true })
    .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
    .setIssuedAt()
    .setIssuer("keevo-inc")
    .setAudience("electron-app")
    .setExpirationTime("48h")
    .encrypt(secret)
    return jwt;
}

//Route: /api/session/verify/route.ts
export async function DecryptJWT(jwtToken: string) {
    const { payload, protectedHeader } = await jose.jwtDecrypt(jwtToken, getSession(), {
        issuer: "keevo-inc",
        audience: "electron-app"
    });
    return Boolean(payload["hasAccess"]);
}