"use client"
import Image from "next/image";
import Link from "next/link";

const SchoolSyncLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-9 w-9">
        <Image
          src="/logo.png"
          alt="SchoolSync Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        SchoolSync
      </span>
    </Link>
  )
}

export default SchoolSyncLogo