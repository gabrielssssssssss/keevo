"use client";
import { useEffect, useState } from "react";
import { AuthHandler, PasswordHandler } from "./utils/auth";
  
export default function Home() {
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("Authandler", AuthHandler());
        PasswordHandler("dazjzadozaodzajdzajdadozSzadaE$")
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
