/*[app/hooks/useAuth.tsx]*/
"use client";

import { useEffect } from "react";
import { isNewComer } from "@/lib/handler/password-handler";
import { useRouter } from "next/navigation";

export default function useAuth() {
    const router = useRouter();
    useEffect(() => {
        const callback = async() => {
            const response = await isNewComer();
            if (!response) {
                router.push("/sign-up/create-password");
            } else {
                router.push("/sign-up/create-password");
            }
        }
        callback();
    });
};