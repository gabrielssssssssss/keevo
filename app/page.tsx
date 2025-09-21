"use client";
import { useEffect, useState } from "react";
import { PasswordHandler } from "./lib/auth/handler";
import { Hash } from "@/lib/hash/hash";

export default function Home() {
    const [password, setPassword] = useState("");

    useEffect(() => {
        const callback = async() => {
            const response = await PasswordHandler('u"]8Z7\q70j-vear');
            if (response) {
                const hashedPasswordResponse = await Hash('u"]8Z7\q70j-vear', "session");
                console.log(hashedPasswordResponse);
            }
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
