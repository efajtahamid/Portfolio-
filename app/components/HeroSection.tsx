"use client";
import Image from "next/image";
import { profile, heroQuotes } from "../config/content";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center gap-8 py-12">
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={150}
          height={150}
          className="rounded-full border-4 border-yellow-400 shadow-xl"
          priority
        />
      </motion.div>
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1 }}
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
          {profile.name}
        </h1>
        <p className="text-lg text-yellow-200 font-semibold">{profile.agency}</p>
        <p className="text-sm text-zinc-300">{profile.agencyDesc}</p>
        <div className="flex flex-col gap-1 mt-2">
          {heroQuotes.slice(0, 3).map((q, i) => (
            <motion.div
              key={i}
              className="font-mono text-base text-yellow-100"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.2 }}
            >
              {q}
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-3">
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 font-bold text-zinc-900 hover:scale-110 shadow-lg transition-all"
          >
            Hire Me
          </a>
          <SocialLinks links={profile.socials} />
        </div>
      </motion.div>
    </section>
  );
}
