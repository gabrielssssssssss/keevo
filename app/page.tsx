"use client";

import useAuth from "./hooks/useAuth";

export default function App() {
    useAuth();
    return (
        <>
          Main page  
        </>
    );
}
