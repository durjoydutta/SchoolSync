import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  // SidebarTrigger,
} from "@/components/ui/sidebar"
import Navbar from "@/components/dashboard/Navbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <Navbar />
        </header>
        {/* MAIN PANEL - dashboard panels*/}
        <main className="h-full w-full flex bg-[#f7f8fa] p-3">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
