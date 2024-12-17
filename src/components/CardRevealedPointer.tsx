import React, { HTMLAttributes } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

interface CardRevealedPointerProps extends HTMLAttributes<HTMLDivElement> {}

export const CardRevealedPointer: React.FC<CardRevealedPointerProps> = ({
  children,
  ...restProps
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group relative  w-full overflow-hidden rounded-xl bg-background md:w-max"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(19, 31, 51, 0.60), transparent 80%)
					`,
        }}
      />
      <div className="relative flex w-full flex-col gap-3 rounded-xl border border-border ">
        {children}
      </div>
    </div>
  );
};
