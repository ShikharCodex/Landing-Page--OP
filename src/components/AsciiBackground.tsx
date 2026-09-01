"use client";

import { useEffect, useRef } from "react";

const CHARS = " .·:-=+*#%@";

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      // Use devicePixelRatio for crisp text
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      time += 0.015; // Animation speed
      
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);
      
      // Configuration for the ASCII grid
      const fontSize = 14;
      const spacing = 18;
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      
      ctx.font = `${fontSize}px monospace`;
      // Slightly darker color so it is visible
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          // Calculate wave based on x, y, and time using sine waves
          const xPos = x * spacing + (spacing / 2);
          const yPos = y * spacing + (spacing / 2);
          
          const wave1 = Math.sin(x * 0.1 + time);
          const wave2 = Math.cos(y * 0.1 + time);
          const wave3 = Math.sin((x * y) * 0.005 - time);
          
          // Combine waves and map to a character index
          const combined = (wave1 + wave2 + wave3) / 3; // Range approximately -1 to 1
          
          // Map to 0 - 1
          let normalized = (combined + 1) / 2;
          
          // Add a subtle radial gradient mask so it fades out at edges
          const dx = xPos - width / 2;
          const dy = yPos - height / 3; // Center slightly higher
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.max(width, height) * 0.8; // Changed from min to max to stretch further
          
          let alpha = 1 - (distance / maxDist);
          if (alpha < 0) alpha = 0;
          
          // Only draw if within the radial mask
          if (alpha > 0.01) {
            // Apply mask to character selection as well (fainter chars at edges)
            normalized = normalized * alpha;
            
            let charIndex = Math.floor(normalized * CHARS.length);
            if (charIndex < 0) charIndex = 0;
            if (charIndex >= CHARS.length) charIndex = CHARS.length - 1;
            
            ctx.fillText(CHARS[charIndex], xPos, yPos);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
