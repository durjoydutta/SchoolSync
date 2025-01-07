import { Card, CardContent } from "@/components/ui/card";
import AnnouncementCard from "@/components/dashboard/AnnouncementCard";
import prisma from "@/lib/prisma";
import React from "react";

const Announcements: React.FC = async () => {
  // Fetch all announcements without role filtering
  const announcementData = await prisma.announcement.findMany({
    take: 3,
    orderBy: { date: "desc" },
  });

  return (
    <Card className="w-full bg-white dark:bg-stone-800 pt-4 rounded-xl">
      <CardContent>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Announcements</h1>
          <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {announcementData.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              title={announcement.title}
              date={announcement.date.toString()}
              description={announcement.description}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Announcements;
