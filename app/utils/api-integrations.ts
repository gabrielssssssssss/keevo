/*[app/utils/api-integrations.ts]*/
export async function DoController(route: string, method: string, payload: Record<string, unknown>) {
    const response = await fetch(route, {
        method: method,
        body: method !== "GET" ? JSON.stringify(payload) : undefined
    });
    const data = await response.json();
    return { status: response.status, data };
}

export const apiIntegrations = {
    disclosed:  (method="POST", payload: Record<string, unknown>) => DoController("/api/disclosed/", method, payload),
};
