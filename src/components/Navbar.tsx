"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Only handle internal hash links
    const href = e.currentTarget.href;
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link 
              href="#product" 
              onClick={handleScroll}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </Link>
            <Link 
              href="#how-it-works" 
              onClick={handleScroll}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
        
        {/* Desktop Waitlist Button */}
        <div className="hidden md:block">
          <Link 
            href="#waitlist" 
            onClick={handleScroll}
            className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-md hover:bg-foreground/90 transition-colors"
          >
            Join the waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="p-2 text-foreground" 
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              <Link 
                href="#product" 
                onClick={handleScroll}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Product
              </Link>
              <Link 
                href="#how-it-works" 
                onClick={handleScroll}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                How it works
              </Link>
              <Link 
                href="#waitlist" 
                onClick={handleScroll}
                className="text-sm font-medium text-center bg-foreground text-background px-4 py-3 rounded-md hover:bg-foreground/90 transition-colors mt-4"
              >
                Join the waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
