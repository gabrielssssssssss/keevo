/*[app/utils/api-session.ts]*/
export async function DoController(route: string, method: string, payload: Record<string, unknown>) {
    const response = await fetch(route, {
        method: method,
        body: method !== "GET" ? JSON.stringify(payload) : undefined
    });
    const data = await response.json();
    return { status: response.status, data };
};

export const apiSession = {
    checkHealthz:    (method="GET", payload?: Record<string, unknown>) => DoController("/api/session/healthz", method, payload ?? {}),
    updateSession:   (method="POST", payload: Record<string, unknown>) => DoController("/api/session/update", method, payload),
};
