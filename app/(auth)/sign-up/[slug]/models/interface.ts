/*[app/(auth)/sign-up/models/interface.ts]*/
import { ToastType } from "@/components/smoothui/ui/BasicToast"

export interface Props {
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
    onSuccess?: () => void
}

export interface DynamicButtonProps {
    setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
    submit: boolean;
    submitStatus: boolean;
}

export type Direction = "up" | "down" | "left" | "right";

export interface UseBlurRevealProps {
    direction?: Direction;
    duration?: number;
    blurAmount?: number;
    distance?: string;
    reverse?: boolean;
    nextRoute?: string;
}

export interface PasswordProps {
    password: string
    setPassword: (value: string) => void
    confirmPassword: string
    setConfirmPassword: (value: string) => void
    charRequirement: "check-mark-button" | "cross mark"
    caseRequirement: "check-mark-button" | "cross mark"
    numberRequirement: "check-mark-button" | "cross mark"
    specialCharRequirement: "check-mark-button" | "cross mark"
    passwordStrength: number
    isSubmitDisabled: boolean
}