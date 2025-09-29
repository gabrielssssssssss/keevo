"use client";

import CreatePassword from "./components/create-password";
import CreatePassphrase from "./components/create-passphrase";
import { useParams } from "next/navigation";

export function Components() {
    const params = useParams();
    const slug = params.slug;

    if (slug == "create-password") {
        return <CreatePassword/>
    } else if (slug == "create-passphrase") {
        return <CreatePassphrase/>
    }
}

export default function SignUp() {
    return (
        <Components/>
    )
}