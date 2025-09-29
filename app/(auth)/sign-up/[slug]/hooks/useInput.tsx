"use client"

import { useEffect } from "react"
import { stoledVerify } from "@/lib/utils"
import { triggerToast } from "@/app/components/toast"
import { ToastType } from "@/components/smoothui/ui/BasicToast"
import { passwordHandler } from "@/lib/handler/password-handler"

interface Props {
    setProgress: React.Dispatch<React.SetStateAction<number>>
    setPasswordState: React.Dispatch<React.SetStateAction<boolean>>
    setSubmitStatus: React.Dispatch<React.SetStateAction<boolean>>
    setIsToastVisible: React.Dispatch<React.SetStateAction<boolean>>
    setToastMessage: React.Dispatch<React.SetStateAction<string>>
    setToastType: React.Dispatch<React.SetStateAction<ToastType>>
    submit: boolean
    password: string
    repeatPassword: string
    isToastVisible: boolean
    toastMessage: string
    toastType: ToastType
}

export default function useInput({
    submit, password, repeatPassword, setProgress, setPasswordState, setSubmitStatus, ...props
}: Props) {
    useEffect(() => {
        if (!submit) return;

        if (repeatPassword) {
            if (repeatPassword === password) {
                passwordHandler(repeatPassword).then(isValid => {
                    if (isValid) {
                        triggerToast("success", props, "Your password has been saved");
                        setProgress(50);
                        setPasswordState(false);
                    }
                })
            } else {
                triggerToast("error", props, "Passwords do not match");
            }
        } else {
            stoledVerify(password).then(found => {
                setSubmitStatus(found)
                if (found)  triggerToast("error", props, "Password found in a breach. Choose another.");
                else {
                    setProgress(30);
                    setPasswordState(false);
                }
            })
        }
    }, [submit, password, repeatPassword]);
}
