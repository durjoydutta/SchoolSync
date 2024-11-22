"use client"
import { School } from 'lucide-react';
import Link from "next/link";

const SchoolSyncLogo = () => {
  return (
    <Link href="/" className="flex justify-center items-center text-center">
      <div className="relative h-10 w-10">
      <School size={32} color="#561fbd" />
      </div>
      <span className="hidden md:block mb-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        SchoolSync
      </span>
    </Link>
  )
}

export default SchoolSyncLogo