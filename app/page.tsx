"use client";
import { useEffect, useState } from "react";
import { passwordHandler } from "@/lib/handler/password-handler";
import { newHash } from "@/lib/crypto";

export default function Home() {
    const [password, setPassword] = useState("");

    useEffect(() => {
        const callback = async() => {
            const response = await passwordHandler('u"]8Z7\q70j-vear');
            console.log(response);
            if (response) {
                const hashedPasswordResponse = await newHash('u"]8Z7\q70j-vear', "session");
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
