"use client"
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SchoolSyncLogo from "@/components/SchoolSyncLogo"
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bg-none backdrop-blur-md shadow-md py-4 px-6 z-[999]"
        >
            <nav className="flex justify-between items-center max-w-[94rem] mx-auto">
                <SchoolSyncLogo />
                <div className="flex gap-4">
                    <Link href={"/login"}>
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
                            <LogIn className="w-4 h-4 mr-2" />
                            Login
                        </Button>
                    </Link>
                    <Avatar className="mt-[2px]">
                        <AvatarImage src="https://github.com/durjoydutta.png" alt="User avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </nav>
        </motion.header>
    )
}

export default Header