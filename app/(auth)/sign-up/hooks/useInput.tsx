"use client"

import { useEffect } from "react"
import { stoledVerify } from "@/lib/utils"
import { triggerToast } from "@/app/components/toast"
import { ToastType } from "@/components/smoothui/ui/BasicToast"

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

export default function useInput(props: Props) {
    useEffect(() => {
        if (!props.submit) return;

        if (props.repeatPassword !== "" && props.repeatPassword === props.password) {
            triggerToast("success", props, "Your password has been saved");
            props.setProgress(50);
            props.setPasswordState(false);
        } else if (props.repeatPassword !== "" && props.repeatPassword !== props.password) {
            triggerToast("error", props, "Passwords do not match");
        } else {
            stoledVerify(props.password).then(response => {
                props.setSubmitStatus(response);
                if (response) {
                    triggerToast("error", props, "Password found in a breach. Choose another.");
                } else {
                    props.setProgress(30);
                    props.setPasswordState(false);
                }
            })
        }
    }, [props.submit, props.password, props.repeatPassword]);
}
