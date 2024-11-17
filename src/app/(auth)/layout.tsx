export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex bg-[#f7f8fa] p-3">
        {children}
      </div>
    );
  }
  