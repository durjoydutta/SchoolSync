import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  value: string | number;
  label: string;
}

interface Stats {
  stats: Stat[];
}

const StatCard = ({stats} : Stats) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-stretch gap-6">
    {stats.map((stat) => (
      <Card key={stat.label} className="flex flex-1 justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
        <CardContent className="p-6">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
        </CardContent>
      </Card>
    ))}
  </div>
  )
}

export default StatCard