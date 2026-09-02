"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";

const quote =
  "\"We believe prompts are more than instructions—they are ideas, experiments, and creative building blocks. OpenPrompt is where those building blocks come together, creating a growing library of human creativity for the age of AI.\"";

interface WordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  // Smoothly interpolate opacity for each word
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="text-foreground transition-colors"
    >
      {children}
    </motion.span>
  );
};

export default function QuoteSection() {
  const container = useRef<HTMLDivElement>(null);

  // Track scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const words = quote.split(" ");

  return (
    <section ref={container} className="relative h-[300vh] md:h-[500vh] bg-background w-full">
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-relaxed sm:leading-relaxed md:leading-snug lg:leading-snug tracking-tight text-foreground">
            {words.map((word, i) => {
              // Add padding at the start and end of the scroll (0.2 to 0.8)
              // This ensures the section locks into place BEFORE the text starts revealing
              // and finishes revealing BEFORE the section un-sticks.
              const start = (i / words.length) * 0.6 + 0.2;
              const end = start + 0.1;
              return (
                <span key={i}>
                  <Word progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                  {i < words.length - 1 && " "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
