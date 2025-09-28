"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress"
import { EmojiProvider, Emoji } from 'react-apple-emojis';
import EmojiIcons from 'react-apple-emojis/src/data.json';
import { syntaxVerify } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { AnimatePresence } from "motion/react"
import BasicToast, { ToastType } from "@/components/smoothui/ui/BasicToast"
import DynamicButton from "./hooks/useButton";
import { stoledVerify } from "@/lib/utils";

export default function SignUp() {
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [charactersLimit, setCharactersLimit] = useState("cross mark");
    const [hasMixedCase, setHasMixedCase] = useState("cross mark");
    const [numbersLimit, setNumbersLimit] = useState("cross mark");
    const [specialCharactersLimit, setSpecialCharactersLimit] = useState("cross mark");
    const [progress, setProgress] = useState(10);

    const [submit, setSubmit] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(true);
    const [passwordState, setPasswordState] = useState(true);

    const [showToast, setShowToast] = useState(false);
    const [messageToast, setMessageToast] = useState("");
    const [typeToast, setTypeToast] = useState<ToastType>("success");


    function handleShowToast(type: ToastType, message: string) {
        setTypeToast(type);
        setMessageToast(message);
        setShowToast(true);
    }

    useEffect(() => {
        const [lower, upper, digits, special] = syntaxVerify(password);
        setCharactersLimit(password.length >= 12 && password.length < 40 ? "check-mark-button" : "cross mark");
        setHasMixedCase(lower && upper ? "check-mark-button" : "cross mark");
        setNumbersLimit(digits ? "check-mark-button" : "cross mark");
        setSpecialCharactersLimit(special ? "check-mark-button" : "cross mark");
        setSubmitStatus(!(password.length >= 12 && password.length < 40 && lower && upper && digits && special));
    }, [password]);

    useEffect(() => {
        if (submit) {
            if (repeatPassword != "" && repeatPassword == password) {
                handleShowToast("success", "Your password has been saved")
                setProgress(50);
                setPasswordState(false);
            } else if (repeatPassword != "" && repeatPassword != password ) {
                handleShowToast("error", "Passwords do not match")
            } else {
                stoledVerify(password).then(response => {
                    setSubmitStatus(response);
                    if (response) handleShowToast("error", "Password found in a breach. Choose another.")
                    else {
                        setProgress(30);
                        setPasswordState(false);
                    }
                });
            }
        }
    })
    
    return (
        <>
        <div className="relative">
            <AnimatePresence>
                {showToast && (
                <BasicToast
                    message={messageToast}
                    type={typeToast}
                    duration={2000}
                    onClose={() => setShowToast(false)}
                />
                )}
            </AnimatePresence>
            <BackgroundBeams className="absolute inset-0" />
            <div className="relative z-10">
                <div className="h-screen flex items-center justify-center">
                    <div className="flex flex-col w-full max-w-sm gap-8">
                        <div className="flex flex-col w-full max-w-sm gap-4 -mb-2">
                            <div className="font-semibold flex items-center justify-center text-3xl">
                                Create your password
                            </div>
                            <div className="flex items-center justify-center text-sm text-center">
                                You must remeber your password - It can NOT be recovered. Your password protects your password manager, it should be diffrent from your other passwords in case someone gets access to your computer.
                            </div>
                        </div>
                        <div className="flex flex-col w-full max-w-sm gap-5">
                            <Input type="text" maxLength={40} placeholder="Type your unique password ..." onChange={(value) => setPassword(value.target.value)}/>
                            <Input disabled={passwordState} type="password" maxLength={40} placeholder="Retype your unique password ..." onChange={(value) => setRepeatPassword(value.target.value)}/>
                            <div>
                                <EmojiProvider data={EmojiIcons}>
                                    <div className="text-sm font-mono flex items-center gap-2">
                                        <Emoji name={charactersLimit} width={15} /> Must have minimum 12 characters
                                    </div>
                                    <div className="text-sm font-mono flex items-center gap-2">
                                        <Emoji name={hasMixedCase} width={15} /> Must have minimum 1 lower and 1 upper characters
                                    </div>
                                    <div className="text-sm font-mono flex items-center gap-2">
                                        <Emoji name={numbersLimit} width={15} /> Must have minimum 1 number
                                    </div>
                                    <div className="text-sm font-mono flex items-center gap-2">
                                        <Emoji name={specialCharactersLimit} width={15} /> Must have minimum 1 special characters
                                    </div>
                                </EmojiProvider>
                            </div>
                            <Progress value={progress} />
                            <DynamicButton setSubmit={setSubmit} submit={submit} submitStatus={submitStatus}/>
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