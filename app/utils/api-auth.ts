/*[app/utils/api-auth.ts]*/
export async function DoController(route: string, method: string, payload: Record<string, unknown>) {
    const response = await fetch(route, {
        method: method,
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return { status: response.status, data };
};

export const apiAuth = {
    decryptPassword: (method="POST", payload: Record<string, unknown>) => DoController("/api/auth/cipher/decrypt", method, payload),
    encryptPassword: (method="POST", payload: Record<string, unknown>) => DoController("/api/auth/cipher/encrypt", method, payload),
    hashPassword:    (method="POST", payload: Record<string, unknown>) => DoController("/api/auth/digest/hash", method, payload),
    verifyPassword:  (method="POST", payload: Record<string, unknown>) => DoController("/api/auth/digest/verify", method, payload),
    forgotPassword:  (method="POST", payload: Record<string, unknown>) => DoController("/api/auth/forgot-password", method, payload),
};
