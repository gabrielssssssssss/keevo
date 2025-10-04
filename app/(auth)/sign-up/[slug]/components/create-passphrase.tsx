/*[app/(auth)/sign-up/components/create-passphrase.tsx]*/
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useBlurReveal from "../hooks/useBlurReveal";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { generateSeedPhrase, addNewPassPhrase } from "@/lib/handler/seedphrase-handler";
import { useRouter } from "next/navigation";

export default function PageCreatePassphrase() {
    const [seedPhrase, setSeedPhrase] = useState<string[]>([]);
    const [revealed, setRevealed] = useState<boolean[]>([]);
    const [submit, setSubmit] = useState(false);
    const router = useRouter();

    const { variants, transition, isLeaving } = useBlurReveal({
        direction: "up",
        reverse: true,
        duration: 0.8,
        nextRoute: "/password-manager",
    });

    useEffect(() => {
        generateSeedPhrase().then(w => {
            if (seedPhrase.length === 0) {
                setSeedPhrase(w);
                setRevealed(Array(w.length).fill(false));
            }
        });
        if (submit) {
            addNewPassPhrase(seedPhrase);
            router.push("/password-manager");
        }
    }, [submit]);

    const handleHover = (index: number, state: boolean) => {
        const updated = [...revealed];
        updated[index] = state;
        setRevealed(updated);
    }

    return (
        <motion.div
            initial="hidden"
            animate={isLeaving ? "hidden" : "visible"}
            className="h-screen w-screen overflow-hidden m-0 p-0"
            variants={variants}
            transition={transition}
            style={{ overflow: "hidden", height: "100vh" }}
        >
            <div className="relative">
                <BackgroundBeams className="absolute inset-0" />
                <div className="relative z-10">
                    <div className="h-screen flex items-center justify-center overflow-hidden">
                        <div className="flex flex-col w-full max-w-2xl gap-8">
                            <div className="flex flex-col w-full gap-4 -mb-2">
                                <div className="font-semibold flex items-center justify-center text-3xl">
                                    Your Passphrase
                                </div>
                                <div className="flex flex-col items-center justify-center text-sm text-center gap-1">
                                    <div>
                                        Your 12-word recovery phrase is the only way to restore access to your password manager if you ever lose it.
                                    </div>
                                    <div>
                                        Write down the words in the exact order from 1 to 12 and store them securely.
                                    </div>
                                    <div className="font-bold">
                                        Anyone with your recovery phrase can take full control of your account.
                                    </div>
                                    <div className="font-bold">
                                        Never share it with anyone.
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 w-full">
                                {[0, 1].map(row => (
                                    <div key={row} className="grid grid-cols-6 gap-3 w-full">
                                        {seedPhrase.slice(row * 6, row * 6 + 6).map((seed, index) => (
                                            <div
                                                key={index + row * 6}
                                                onMouseEnter={() => handleHover(index + row * 6, true)}
                                                onMouseLeave={() => handleHover(index + row * 6, false)}
                                                onClick={() => handleHover(index + row * 6, !revealed[index + row * 6])}
                                                className="flex flex-col items-center cursor-pointer"
                                            >
                                                <span className={`text-base font-medium transition duration-200 ease-in-out select-none ${revealed[index + row * 6] ? "blur-none" : "blur-xs"}`}>
                                                    {seed}
                                                </span>
                                                <div className="w-6 border-b border-gray-400 mt-1" />
                                                <span className="text-xs text-gray-400 mt-1">{index + 1 + row * 6}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col w-full gap-5">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button className="w-full cursor-pointer" variant="default">
                                            Next
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. It will permanently remove your recovery phrase 
                                                from this device and you will lose access to your password manager if you haven’t saved it securely.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                                            <AlertDialogAction className="cursor-pointer" onClick={() => setSubmit(true)}>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                                <div className="text-xs italic text-center">
                                    WARNING: Never share your passphrase with anyone. It secures your entire account.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};