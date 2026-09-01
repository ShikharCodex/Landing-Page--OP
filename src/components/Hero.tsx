"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroPreview from "./HeroPreview";
import AsciiBackground from "./AsciiBackground";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const item: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <AsciiBackground />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        <div className="space-y-4">
          <motion.p variants={item} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            OpenPrompt
          </motion.p>
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-medium tracking-tight text-foreground leading-tight">
            The home for every AI prompt.
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your best prompts shouldn&apos;t be scattered across chats, notes, bookmarks, and apps. OpenPrompt gives them one place to live.
          </motion.p>
        </div>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            href="#waitlist"
            className="w-full sm:w-auto px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-colors"
          >
            Join the waitlist
          </Link>
          <Link 
            href="#how-it-works"
            className="w-full sm:w-auto px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors"
          >
            Explore the idea
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-20 md:mt-32 max-w-5xl mx-auto"
      >
        <HeroPreview />
      </motion.div>
    </section>
  );
}
