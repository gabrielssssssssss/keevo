"use client";

import useAuth from "./hooks/useAuth";

export default function Handler() {
    useAuth();

    return (
        <>
          Main page  
        </>
    );
}
