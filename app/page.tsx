"use client";
import { useEffect, useState } from "react";
import { AuthHandler, PasswordHandler } from "./lib/auth/handler";
  
export default function Home() {
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (!AuthHandler('u"]8Z7\q70j-ev')) {
            const callback = async() => {
                await PasswordHandler('u"]8Z7\q70j-v');
            }
            callback();
        }
    }, [])

    return (
        <>
            <div>
                <input placeholder="type password" type="text" onChange={(value) => {setPassword(value.target.value)}}/>
            </div> 
        </>
    );
}
