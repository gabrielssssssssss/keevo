"use client";

import React from "react";
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

export default function ToastContainer({
    setIsToastVisible,
    isToastVisible,
    toastMessage,
    toastType
} : Props) {

    return (
        <AnimatePresence>
            {isToastVisible && (
                <BasicToast
                    key={Date.now()}
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
