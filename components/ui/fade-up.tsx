"use client";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import React, { ElementType, ReactNode } from "react";

interface FadeUpProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export const FadeUp = ({ as: Component = "div", children, className }: FadeUpProps) => {
  const MotionComponent = motion(Component);

  const variants: Variants = {
    hidden: { opacity: 0, y: 0 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 30, damping: 20 } },
  };

  return (
    <MotionComponent
      initial="hidden"
      animate="show"
      variants={variants}
      className={clsx(className)}
    >
      {children}
    </MotionComponent>
  );
};
