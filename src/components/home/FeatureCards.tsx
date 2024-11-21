import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";


interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardsProps {
  features: Feature[];
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ features }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-4">
      {features.map((feature) => (
        <Card key={feature.title} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
          <CardContent className="p-6">
            <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;
