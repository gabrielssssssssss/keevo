"use client";
import { useEffect, useState } from "react";
import { passwordHandler } from "@/lib/handler/password-handler";
import { newHash } from "@/lib/crypto";
import { generateSeedPhrase, hashEachWords, addNewPassPhrase, verifyHashEachWords } from "@/lib/handler/seedphrase-handler";

export default function Home() {
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        const callback = async() => {
            const trucmachin = await generateSeedPhrase();
            console.log(trucmachin);
            const hashedtrucmachin = await hashEachWords(trucmachin)
            const verfiedTruc = await verifyHashEachWords(trucmachin, hashedtrucmachin)
            const jsp = await addNewPassPhrase(hashedtrucmachin);
            console.log("dakldazkldazj:", jsp)
            console.log("jesaispas: ", verfiedTruc);
            //e
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
