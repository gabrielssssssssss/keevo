/*[app/(auth)/sign-up/hooks/useInput.tsx]*/
"use client";

import { useEffect } from "react";
import { apiIntegrations } from "@/app/utils/api-integrations";
import { triggerToast } from "@/app/components/toast";
import { passwordHandler } from "@/lib/handler/password-handler";
import { Props } from "../models/interface";

export default function useInput({
    submit,
    password,
    repeatPassword,
    setProgress,
    setPasswordState,
    setSubmitStatus,
    onSuccess,
    ...props
}: Props) {
    useEffect(() => {
        if (!submit)
            return;
        if (repeatPassword) {
            if (repeatPassword === password) {
                const callback = async() => {
                    const passwordHandlerResponse = await passwordHandler(password);
                    if (passwordHandlerResponse) {
                        triggerToast("success", props, "Your password has been saved");
                        setProgress(50);
                        setPasswordState(false);
                        if (onSuccess) onSuccess();
                    };
                };
                callback();
            } else {
                triggerToast("error", props, "Passwords do not match");
            };
        } else {
            const callback = async() => {
                const disclosedResp = await apiIntegrations.disclosed(undefined, { password });
                setSubmitStatus(disclosedResp.data["success"]);
                if (disclosedResp.data["success"]) 
                    triggerToast("error", props, "Password found in a breach. Choose another.");
                else {
                    setProgress(30);
                    setPasswordState(false);
                };
            };
            callback();
        }
    }, [submit, password, repeatPassword]);
};