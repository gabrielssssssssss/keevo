"use client";

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import BasicToast, { ToastType } from "@/components/smoothui/ui/BasicToast";

interface Props {
    setIsToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setToastMessage: React.Dispatch<React.SetStateAction<string>>;
    setToastType: React.Dispatch<React.SetStateAction<ToastType>>;
    isToastVisible: boolean;
    toastMessage: string;
    toastType: ToastType;
}

let toastCounter = 0;

export default function ToastContainer({
    setIsToastVisible,
    isToastVisible,
    toastMessage,
    toastType
} : Props) {
    const [toastKey, setToastKey] = useState(0);

    React.useEffect(() => {
        if (isToastVisible) {
            toastCounter++;
            setToastKey(toastCounter);
        }
    }, [isToastVisible]);

    return (
        <AnimatePresence>
            {isToastVisible && (
                <BasicToast
                    key={toastKey}
                    message={toastMessage}
                    type={toastType}
                    duration={2000}
                    onClose={() => setIsToastVisible(false)}
                />
            )}
        </AnimatePresence>
    )
}

export function triggerToast(type: ToastType, props: Props, message: string) {
    props.setToastType(type);
    props.setToastMessage(message);
    props.setIsToastVisible(false);
    setTimeout(() => props.setIsToastVisible(true), 0);
}
