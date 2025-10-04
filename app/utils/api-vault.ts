/*[app/utils/api-vault.ts]*/
export async function DoController(route: string, method: string, payload: Record<string, unknown>) {
    const response = await fetch(route, {
        method: method,
        body: method !== "GET" ? JSON.stringify(payload) : undefined
    });
    const data = await response.json();
    return { status: response.status, data };
}

export const apiVault = {
    addVault:    (method="POST", payload: Record<string, unknown>) => DoController("/api/vault/", method, payload),
    getVault:    (id: string, method="GET", payload?: Record<string, unknown>) => DoController(`/api/vault/${id}`, method, payload ?? {}),
    deleteVault: (id: string, method="DELETE", payload?: Record<string, unknown>) => DoController(`/api/vault/${id}`, method, payload ?? {}),
    updateVault: (id: string, method="PUT", payload: Record<string, unknown>) => DoController(`/api/vault/${id}`, method, payload),
};
