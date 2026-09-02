"use client";

import React, { useRef, useState } from 'react';
import Logo from '@/components/Logo';

export default function VideoSection() {
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!video.duration) return;
    
    const timeLeft = video.duration - video.currentTime;
    
    // Start fading to black 0.8 seconds before the video ends
    if (timeLeft <= 0.8 && !isFading) {
      setIsFading(true);
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      
      // Fade back in shortly after restarting
      setTimeout(() => {
        setIsFading(false);
      }, 150);
    }
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          className="object-cover w-full h-full blur-[4px] scale-[1.25] md:scale-[1.4] brightness-75"
        >
          <source src="/video/hands of openPrompt.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 pointer-events-none" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none transition-transform duration-700 hover:scale-105">
        <div className="scale-125 sm:scale-150 md:scale-[2] text-white [&_svg]:!text-white [&_span]:!text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <Logo showText={false} />
        </div>
      </div>
    </section>
  );
}
