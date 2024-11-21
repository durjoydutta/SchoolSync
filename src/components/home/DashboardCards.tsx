import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, ArrowRight} from "lucide-react";
import Link from "next/link";

interface Dashboard {
  href: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

interface DashboardProps {
  dashboards: Dashboard[];
}

const DashboardCards = ({dashboards}:DashboardProps) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {dashboards.map((item) => (
      <Link key={item.label} href={item.href} className="group">
        <Card className="relative overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
          <CardContent className="relative p-6">
            <div className="flex flex-col items-center text-center space-y-4 group-hover:text-white transition-colors">
              <item.icon className="w-12 h-12" />
              <span className="text-lg font-semibold">{item.label}</span>
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
  )
}

export default DashboardCards;