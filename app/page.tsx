"use client";
import { useEffect, useState } from "react";
import { PasswordHandler, PassPhraseHandler } from "./lib/auth/handler";
  
export default function Home() {
    const [password, setPassword] = useState("");

    useEffect(() => {
        // const callback = async() => {
        //     const response = await AuthHandler('u"]8Z7\q70j-vedr');
        //     console.log(response);
        //     if (!response) {
        //         await PasswordHandler('u"]8Z7\q70j-vedr');
        //     }
        // }
        // callback();
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
