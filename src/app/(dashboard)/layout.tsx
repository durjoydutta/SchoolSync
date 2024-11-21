import Navbar from "@/components/dashboard/Navbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* MAIN PANEL - dashboard panels*/}
      <main className="h-full w-full flex bg-[#f7f8fa] p-3">
        {children}
      </main>
    </>
  )
}
