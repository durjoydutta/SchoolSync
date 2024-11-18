import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MenuBar from "@/components/Menu"
import Navbar from "@/components/Navbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex bg-[#f7f8fa] p-3">
      {/* MAIN PANEL - navbar and dashboard panels*/}
      <div className="w-full">
        <Navbar />
        {children}
      </div>
      {/* MENU PANEL - menu sidebar*/}
      {/* <div className="w-[15%] md:w[8%] lg:w[5%] xl:w-[13%] bg-white pt-4 rounded-xl flex flex-col justify-between">
        <MenuBar />
      </div> */}
    </div>
  );
}
