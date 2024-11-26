"use client"
import { LogIn, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SchoolSyncLogo from "@/components/SchoolSyncLogo"
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import BackgroundAnimation from "@/components/BackgroundAnimation"
import { useState, useEffect } from "react";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import UserDropDown from "@/components/UserDropDown";
import AppNavigationMenu from '@/components/navbar/AppNavigationMenu';
import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

const data = {
    user: {
        id: 1,
        name: "ddc",
        email: "contact.durjoy@gmail.com",
        avatar: "https://github.com/durjoydutta.png",
    },
}

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false) // This should be replaced with actual auth logic
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
        (<Link href={"/auth"}>
            <Button className="mb-1 ml-3 -mr-2 relative w-3/4 h-[28px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
                <LogIn className="w-1/2 h-full" />
                Login
            </Button>
        </Link>
        ) : (
            <UserDropDown user={data.user} />
        )

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 md:sticky w-full backdrop-blur-sm shadow-lg bg-indigo-600/10 py-4 pl-6 pr-2 sm:px-4 z-10"
        >
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="" />
                    <Separator orientation="vertical" className="mr-2 h-4 hidden lg:block" />
                    <AppNavigationMenu />
                </div>
                <div className="flex justify-end items-center">
                    <DarkModeSwitch />
                    <div className="mt-1">{navLoggedInStatus()}</div>
                </div>
            </nav>
        </motion.header>
    )
}

export default Navbar
