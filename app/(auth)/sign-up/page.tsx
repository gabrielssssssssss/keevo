"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress"
import { EmojiProvider, Emoji } from 'react-apple-emojis';
import EmojiIcons from 'react-apple-emojis/src/data.json';
import { syntaxVerify } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { ToastType } from "@/components/smoothui/ui/BasicToast"
import DynamicButton from "./hooks/useButton";
import useInput from "./hooks/useInput";
import ToastContainer from "@/app/components/toast";
import { triggerToast } from "@/app/components/toast"

export default function SignUp() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [charRequirement, setCharRequirement] = useState("cross mark");
    const [caseRequirement, setCaseRequirement] = useState("cross mark");
    const [numberRequirement, setNumberRequirement] = useState("cross mark");
    const [specialCharRequirement, setSpecialCharRequirement] = useState("cross mark");
    const [passwordStrength, setPasswordStrength] = useState(10);

    const [isSubmitTriggered, setIsSubmitTriggered] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);

    const [isToastVisible, setIsToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState<ToastType>("success");

    useEffect(() => {
        const [hasLower, hasUpper, hasDigit, hasSpecial] = syntaxVerify(password);
        setCharRequirement(password.length >= 12 && password.length < 40 ? "check-mark-button" : "cross mark");
        setCaseRequirement(hasLower && hasUpper ? "check-mark-button" : "cross mark");
        setNumberRequirement(hasDigit ? "check-mark-button" : "cross mark");
        setSpecialCharRequirement(hasSpecial ? "check-mark-button" : "cross mark");
        setIsSubmitDisabled(!(password.length >= 12 && password.length < 40 && hasLower && hasUpper && hasDigit && hasSpecial));
    }, [password]);

    useInput({
        setProgress: setPasswordStrength,
        setPasswordState: setIsConfirmDisabled,
        setSubmitStatus: setIsSubmitDisabled,
        setIsToastVisible,
        setToastMessage,
        setToastType,
        submit: isSubmitTriggered,
        password,
        repeatPassword: confirmPassword,
        isToastVisible,
        toastMessage,
        toastType,
    })

    return (
        <>
        <div className="relative">
            <ToastContainer 
                setIsToastVisible={setIsToastVisible} 
                setToastMessage={setToastMessage} 
                setToastType={setToastType} 
                isToastVisible={isToastVisible} 
                toastMessage={toastMessage} 
                toastType={toastType}>
            </ToastContainer>
            <BackgroundBeams className="absolute inset-0" />
            <div className="relative z-10">
                <div className="h-screen flex items-center justify-center">
                    <div className="flex flex-col w-full max-w-sm gap-8">
                        <div className="flex flex-col w-full max-w-sm gap-4 -mb-2">
                            <div className="font-semibold flex items-center justify-center text-3xl">
                                Create your password
                            </div>
                            <div className="flex items-center justify-center text-sm text-center">
                                You must remember your password - It can NOT be recovered. Your password protects your password manager, it should be different from your other passwords in case someone gets access to your computer.
                            </div>
                        </div>
                        <div className="flex flex-col w-full max-w-sm gap-5">
                            <Input
                            type="text"
                            maxLength={40}
                            placeholder="Type your unique password ..."
                            onChange={(e) => setPassword(e.target.value)}
                            onPaste={(e) => {
                                e.preventDefault()
                                triggerToast(
                                "warning",
                                { isToastVisible, toastMessage, toastType, setToastType, setToastMessage, setIsToastVisible },
                                "Pasting is not allowed"
                                )
                            }}
                            onCopy={(e) => {
                                e.preventDefault()
                                triggerToast(
                                "warning",
                                { isToastVisible, toastMessage, toastType, setToastType, setToastMessage,  setIsToastVisible },
                                "Copy is not allowed"
                                )
                            }}
                            />

                            <Input
                            type="password"
                            maxLength={40}
                            placeholder="Retype your unique password ..."
                            disabled={isConfirmDisabled}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onPaste={(e) => {
                                e.preventDefault()
                                triggerToast(
                                "warning",
                                { isToastVisible, toastMessage, toastType, setToastType, setToastMessage, setIsToastVisible },
                                "Pasting is not allowed"
                                )
                            }}
                            onCopy={(e) => {
                                e.preventDefault()
                                triggerToast(
                                "warning",
                                { isToastVisible, toastMessage, toastType, setToastType, setToastMessage, setIsToastVisible },
                                "Copy is not allowed"
                                )
                            }}
                            />
                            <div>
                                <EmojiProvider data={EmojiIcons}>
                                    <div className="text-sm font-mono flex items-center gap-2">
                                        <Emoji name={charRequirement} width={15} /> Must have minimum 12 characters
                                    </div>
                                    <div className="text-sm font-mono flex items-center gap-2">
                                        <Emoji name={caseRequirement} width={15} /> Must have minimum 1 lower and 1 upper characters
                                    </div>
                                    <div className="text-sm font-mono flex items-center gap-2">
                                        <Emoji name={numberRequirement} width={15} /> Must have minimum 1 number
                                    </div>
                                    <div className="text-sm font-mono flex items-center gap-2">
                                        <Emoji name={specialCharRequirement} width={15} /> Must have minimum 1 special character
                                    </div>
                                </EmojiProvider>
                            </div>
                            <Progress value={passwordStrength} />
                            <DynamicButton setSubmit={setIsSubmitTriggered} submit={isSubmitTriggered} submitStatus={isSubmitDisabled}/>
                            <div className="text-xs italic">
                                WARNING: Do NOT use the same password as your other internet websites, social media or email accounts.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}