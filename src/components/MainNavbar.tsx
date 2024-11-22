"use client"
import { LogIn, Menu, X, ChevronDown} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SchoolSyncLogo from "@/components/SchoolSyncLogo"
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import BackgroundAnimation from "@/components/BackgroundAnimation"
import { useState, useEffect } from "react";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import UserDropDown from "@/components/UserDropDown"  ;
import AppNavigationMenu from '@/components/AppNavigationMenu';

const data = {
    user: {
        id: 1,
        name: "ddc",
        email: "contact.durjoy@gmail.com",
        avatar: "https://github.com/durjoydutta.png",
    },
}

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true) // This should be replaced with actual auth logic
    const [userRole, setUserRole] = useState('student')
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < lastScrollY) {
            // Scrolling up
            setIsVisible(true)
        } else if (latest > 100 && latest > lastScrollY) {
            // Scrolling down and past the 100px mark
            setIsVisible(false)
        }
        setLastScrollY(latest)
    })

    const navLoggedInStatus = () => !isLoggedIn ?
        (<Link href={"/login"}>
            <Button className="w-20 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
                <LogIn className="w-full h-full mr-2" />
                Login
            </Button>
        </Link>
        ) : (
            <UserDropDown user={data.user}/>
        )

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            id="navbar"
            className="fixed top-0 left-0 right-0 bg-none backdrop-blur-md shadow-md py-4 px-6 z-[999]"
        >
            <BackgroundAnimation />
            <nav className="flex justify-between items-center flex-grow">
                <SchoolSyncLogo />
                <AppNavigationMenu/>
                <div className="flex justify-end items-center">
                    <DarkModeSwitch />
                    {navLoggedInStatus()}
                </div>
            </nav>
        </motion.header>
    )
}

export default Navbar

