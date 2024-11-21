import Navbar from "@/components/Navbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {/* MAIN PANEL - dashboard panels*/}
      <main className="h-full w-full flex bg-[#f7f8fa] p-3">
        {children}
      </main>
    </>
  )
}
