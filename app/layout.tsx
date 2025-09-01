import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Efaj Tahamid Rifat – Portfolio",
  description: "Next-level portfolio for Efaj Tahamid Rifat",
  openGraph: {
    title: "Efaj Tahamid Rifat – Portfolio",
    description: "Hire a world-class community manager, moderator, and web3 expert.",
    images: [
      { url: "https://i.supaimg.com/8b3b7bef-072a-4469-96bb-6b180d110216.jpg" }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
