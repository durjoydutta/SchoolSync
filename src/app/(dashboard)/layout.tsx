import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-[#f7f8fa] p-3">
      {/* LEFT PANEL - link to Home and menu sidebar*/}
      <div className="h-full left w-[15%] md:w[8%] lg:w[5%] xl:w-[13%] bg-white pt-4 rounded-xl flex flex-col justify-between">
        <Link href="/" className="flex justify-center items-center gap-1">
          <Image src='/logo.png' alt='logo' width={32} height={32}/>
          <span className="hidden lg:block text-lg font-semibold">SchoolSync</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT PANEL - navbar and dashboard panels*/}
      <div className="right w-[88%] md:w[92%] lg:w[95%] xl:w-[87%] overflow-y-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
