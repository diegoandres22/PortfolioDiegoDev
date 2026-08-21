"use client"

import { cloneElement, useId, useState, type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TooltipProps {
    label: string;
    children: ReactElement<{ "aria-describedby"?: string }>;
    side?: "top" | "bottom";
}

const Tooltip = ({ label, children, side = "top" }: TooltipProps) => {
    const [open, setOpen] = useState(false);
    const id = useId();

    return (
        <span
            className="relative inline-flex"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
        >
            {cloneElement(children, { "aria-describedby": id })}
            <AnimatePresence>
                {open && (
                    <motion.span
                        role="tooltip"
                        id={id}
                        initial={{ opacity: 0, y: side === "top" ? 4 : -4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: side === "top" ? 4 : -4, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2.5 py-1 text-xs font-medium text-white shadow-lg shadow-black/30 ${side === "top" ? "bottom-full mb-2" : "top-full mt-2"
                            }`}
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
}

export default Tooltip;
