"use client";
import { useEffect, useState } from "react";
import { PasswordHandler } from "./lib/auth/handler";
import { SessionKey, NewSession } from "@/app/lib/session/handler";

export default function Home() {
    const [password, setPassword] = useState("");

    useEffect(() => {
        const callback = async() => {
            console.log("before", SessionKey);
            const response = await PasswordHandler('u"]8Z7\q70j-vear');
            if (response) {
                await NewSession('u"]8Z7\q70j-vear');
            }
            console.log("after", SessionKey);
            console.log(response);
        }
        callback();
    }, [])

    return (
        <>
            <div>
                <input placeholder="type password" type="text" onChange={(value) => {setPassword(value.target.value)}}/>
            </div> 
        </>
    );
}
