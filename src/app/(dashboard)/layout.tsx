import Navbar from "@/components/dashboard/Navbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <Navbar />
      </header>
      {/* MAIN PANEL - dashboard panels*/}
      <main className="h-full w-full bg-[#f7f8fa] p-3 flex flex-col">
        {children}
      </main>
    </>

  )
}
