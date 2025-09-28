"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"
import { EmojiProvider, Emoji } from 'react-apple-emojis';
import EmojiIcons from 'react-apple-emojis/src/data.json';
import { syntaxVerify } from "@/lib/utils";

export default function SignUp() {
    const [password, setPassword] = useState("");
    const [charactersLimit, setCharactersLimit] = useState("cross mark");
    const [hasMixedCase, setHasMixedCase] = useState("cross mark");
    const [numbersLimit, setNumbersLimit] = useState("cross mark");
    const [specialCharactersLimit, setSpecialCharactersLimit] = useState("cross mark");
    const [submit, setSubmit] = useState(true);

    useEffect(() => {
        const [lower, upper, digits, special] = syntaxVerify(password);

        setCharactersLimit(password.length >= 12 && password.length < 40 ? "check-mark-button" : "cross mark");
        setHasMixedCase(lower && upper ? "check-mark-button" : "cross mark");
        setNumbersLimit(digits ? "check-mark-button" : "cross mark");
        setSpecialCharactersLimit(special ? "check-mark-button" : "cross mark");

        setSubmit(!(password.length >= 12 && password.length < 40 && lower && upper && digits && special));
    }, [password]);

    return (
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
                    <Input type="email" placeholder="Type your unique password ..." onChange={(value) => setPassword(value.target.value)}/>
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
                    <Progress value={10} />
                    <Button className="w-full cursor-pointer" variant={"default"} disabled={submit}>Next</Button>
                    <div className="text-xs font-extralight">
                        WARNING: Do NOT use the same password as your other internet websites, social media or email accounts.
                    </div>
                </div>
            </div>
        </div>
    )
}