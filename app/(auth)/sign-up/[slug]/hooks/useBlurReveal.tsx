// app/hooks/useBlurReveal.ts
import { cubicBezier, Variants } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Direction = "up" | "down" | "left" | "right";

interface UseBlurRevealProps {
    direction?: Direction;
    duration?: number;
    blurAmount?: number;
    distance?: string;
    reverse?: boolean;
    nextRoute?: string;
}

export default function useBlurReveal({
    direction = "up",
    duration = 1,
    blurAmount = 10,
    distance = "20%",
    reverse = false,
    nextRoute,
}: UseBlurRevealProps = {}) {
    const router = useRouter();
    const [isLeaving, setIsLeaving] = useState(false);

    const transition = { duration, ease: cubicBezier(0.25, 0.1, 0.25, 1) };

    let initialTransform = "";
    let exitTransform = "";
    switch (direction) {
        case "up":
            initialTransform = `translateY(${distance})`;
            exitTransform = `translateY(-${distance})`;
            break;
        case "down":
            initialTransform = `translateY(-${distance})`;
            exitTransform = `translateY(${distance})`;
            break;
        case "left":
            initialTransform = `translateX(${distance})`;
            exitTransform = `translateX(-${distance})`;
            break;
        case "right":
            initialTransform = `translateX(-${distance})`;
            exitTransform = `translateX(${distance})`;
            break;
    }

    const variants: Variants = reverse
        ? {
              hidden: { filter: `blur(${blurAmount}px)`, transform: exitTransform, opacity: 0 },
              visible: { filter: "blur(0)", transform: "translateX(0) translateY(0)", opacity: 1 },
          }
        : {
              hidden: { filter: `blur(${blurAmount}px)`, transform: initialTransform, opacity: 0 },
              visible: { filter: "blur(0)", transform: "translateX(0) translateY(0)", opacity: 1 },
          };

    const navigateNext = () => {
        if (!nextRoute) return;
        setIsLeaving(true);
        setTimeout(() => {
            router.push(nextRoute);
        }, duration * 1000);
    };

    return { variants, transition, isLeaving, navigateNext };
}
