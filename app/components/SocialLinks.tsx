"use client";
import { FC } from "react";

type SocialLink = {
  name: string;
  icon: string;
  url: string;
};

const iconMap: Record<string, string> = {
  discord: "fab fa-discord",
  telegram: "fab fa-telegram",
  twitter: "fab fa-x-twitter",
  linkedin: "fab fa-linkedin",
};

const SocialLinks: FC<{ links: SocialLink[] }> = ({ links }) => (
  <div className="flex gap-3">
    {links.map((link) => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.name}
        className="text-yellow-400 hover:text-yellow-200 text-2xl"
      >
        <i className={iconMap[link.icon] || "fas fa-link"} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
