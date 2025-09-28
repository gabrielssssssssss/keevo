'use client';

import { useEffect } from "react";
import { isNewComer } from "@/lib/handler/password-handler";
import { useRouter } from "next/navigation";

export default function useAuth() {
    const router = useRouter();
    useEffect(() => {
        const callback = async() => {
            const response = await isNewComer();
            if (!response) {
                //Route: app/(auth)/sign-up/page.tsx
                router.push("/sign-up");
            } else {
                //Route: app/(auth)/login/page.tsx
                router.push("/login");
            }
        }
        callback();
    })
}