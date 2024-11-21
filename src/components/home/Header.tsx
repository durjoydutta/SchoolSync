import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SchoolSyncLogo from "@/components/SchoolSyncLogo"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <SchoolSyncLogo />
      <div className="flex gap-4">
        <Link href={"/login"}>
          <Button variant="outline" className="bg-white/80 hover:bg-white/90 backdrop-blur-sm">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
        </Link>
        <Link href={"/signup"}>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Header