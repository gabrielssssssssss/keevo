"use client";
import { useEffect, useState } from "react";
import { PasswordHandler } from "./lib/auth/handler";
  
export default function Home() {
    const [password, setPassword] = useState("");

    useEffect(() => {
        const callback = async() => {
            const response = await PasswordHandler('u"]8Z7\q70j-vear');
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
