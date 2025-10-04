/*[app/handler/password-handler.ts]*/
import { apiAuth } from "@/app/utils/api-auth";
import { apiIntegrations } from "@/app/utils/api-integrations";
import { syntaxVerify } from "@/lib/utils";
import { getFirstField, addPassword } from "@/actions/auth-actions";
import { getAllCredentials } from "@/actions/credentials-actions";

export async function isNewComer() {
    const authResponse = await getFirstField();
    const passwordResponse = await getAllCredentials();
    return Boolean(authResponse || passwordResponse.length > 0);
}

export async function passwordHandler(password: string) {
    const authResponse = await getFirstField();
    const passwordResponse = await getAllCredentials();

    if (authResponse?.password) {
        const { status } = await apiAuth.verifyPassword(undefined, { password, hashedPassword: authResponse.password });
        return status === 200;
    };

    const isPasswordValid = password.length >= 12 && password.length < 64;
    if (!authResponse && passwordResponse.length === 0 && isPasswordValid) {
        const disclosedResp = await apiIntegrations.disclosed(undefined, { password });
        if (disclosedResp.data["success"] == true || !syntaxVerify(password)) return false;

        const hashedResp = await apiAuth.hashPassword(undefined, { password, context: "" });
        console.log(hashedResp)
        if (hashedResp.status === 200) {
            return addPassword(hashedResp.data.hashedPassword);
        };
    };
    return false;
}
