import React from "react";
import { motion } from "framer-motion";
import useBlurReveal from "../hooks/useBlurReveal";

export default function PageCreatePassphrase() {
    const { variants, transition, isLeaving, navigateNext } = useBlurReveal({
        direction: "up",
        reverse: true,
        duration: 0.8,
        nextRoute: "/sign-up/create-passphrase",
    });

    return (
        <motion.div
            initial="hidden"
            animate={isLeaving ? "hidden" : "visible"}
            className="h-screen w-screen overflow-hidden m-0 p-0"
            variants={variants}
            transition={transition}
            style={{ overflow: "hidden", height: "100vh" }}
        >
            
        </motion.div>
    )
}