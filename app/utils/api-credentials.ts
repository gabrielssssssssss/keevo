/*[app/utils/api-credentials.ts]*/
export async function DoController(route: string, method: string, payload: Record<string, unknown>) {
    const response = await fetch(route, {
        method: method,
        body: method !== "GET" ? JSON.stringify(payload) : undefined
    });
    const data = await response.json();
    return { status: response.status, data };
}

export const apiCredentials = {
    addCredentials:    (method="POST", payload: Record<string, unknown>) => DoController("/api/credentials/", method, payload),
    getCredentials:    (id: string, method="GET", payload?: Record<string, unknown>) => DoController(`/api/credentials/${id}`, method, payload ?? {}),
    deleteCredentials: (id: string, method="DELETE", payload?: Record<string, unknown>) => DoController(`/api/credentials/${id}`, method, payload ?? {}),
    updateCredentials: (id: string, method="PUT", payload: Record<string, unknown>) => DoController(`/api/credentials/${id}`, method, payload),
};
