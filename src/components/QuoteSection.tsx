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
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="mr-2 md:mr-3 lg:mr-4 mt-2 md:mt-3 lg:mt-4 inline-block text-foreground transition-colors"
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

  // Apply a spring physics effect to make the scrolling animation feel buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const words = quote.split(" ");

  return (
    <section ref={container} className="relative h-[600vh] bg-background w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <p className="flex flex-wrap justify-center text-center text-3xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-tight lg:leading-tight tracking-tight text-foreground">
            {words.map((word, i) => {
              // Calculate a staggered overlapping range for each word
              // This makes multiple words fade in smoothly rather than one by one harshly
              const start = (i / words.length) * 0.8;
              const end = start + 0.2;
              return (
                <Word key={i} progress={smoothProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
