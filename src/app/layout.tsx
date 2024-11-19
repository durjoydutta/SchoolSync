import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SchoolSync - A Parent Teacher Interaction Management System",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"inter.className antialiased"}>
        <div className="absolute top-0 left-0 p-6 flex justify-between items-center z-50">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="SchoolSync Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SchoolSync
            </span>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
