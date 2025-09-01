"use client";
import { motion } from "framer-motion";
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0" aria-hidden>
        <defs>
          <radialGradient id="bg1" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#FFD70077" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <motion.circle
          cx="60%" cy="40%" r="320"
          fill="url(#bg1)"
          animate={{ r: [250, 320, 250], opacity: [0.24, 0.38, 0.24] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.circle
          cx="30%" cy="80%" r="180"
          fill="url(#bg1)"
          animate={{ r: [120, 180, 120], opacity: [0.16, 0.33, 0.16] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
        />
      </svg>
    </div>
  );
}
