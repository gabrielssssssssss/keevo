/*[app/(auth)/sign-up/hooks/usePassword.tsx]*/
"use client";

import { useEffect, useState } from "react";
import { PasswordProps } from "../models/interface";
import { syntaxVerify } from "@/lib/utils";

export default function usePassword() : PasswordProps {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [charRequirement, setCharRequirement] = useState<"check-mark-button" | "cross mark">("cross mark");
    const [caseRequirement, setCaseRequirement] = useState<"check-mark-button" | "cross mark">("cross mark");
    const [numberRequirement, setNumberRequirement] = useState<"check-mark-button" | "cross mark">("cross mark");
    const [specialCharRequirement, setSpecialCharRequirement] = useState<"check-mark-button" | "cross mark">("cross mark");
    const [passwordStrength, setPasswordStrength] = useState(10);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    
    useEffect(() => {
        const [hasLower, hasUpper, hasDigit, hasSpecial] = syntaxVerify(password);
        setCharRequirement(password.length >= 12 && password.length < 40 ? "check-mark-button" : "cross mark");
        setCaseRequirement(hasLower && hasUpper ? "check-mark-button" : "cross mark");
        setNumberRequirement(hasDigit ? "check-mark-button" : "cross mark");
        setSpecialCharRequirement(hasSpecial ? "check-mark-button" : "cross mark");
        setIsSubmitDisabled(!(password.length >= 12 && password.length < 40 && hasLower && hasUpper && hasDigit && hasSpecial));
    }, [password]);

    return {
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        charRequirement,
        caseRequirement,
        numberRequirement,
        specialCharRequirement,
        passwordStrength,
        isSubmitDisabled,
    };
};
