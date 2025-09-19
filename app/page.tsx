"use client";
import { useEffect, useState } from "react";
import { AuthHandler, PasswordHandler } from "./utils/auth/auth";
  
export default function Home() {
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (!AuthHandler()) {
            const response = async() => {
                console.log("Password Handler", await PasswordHandler('u"]8Z7\q70j-v'));
            }
            response();
        }
    }, [])

    // console.log(password);
    return (
        <>
            <div>
                <input placeholder="type password" type="text" onChange={(value) => {setPassword(value.target.value)}}/>
            </div> 
        </>
    );
}
