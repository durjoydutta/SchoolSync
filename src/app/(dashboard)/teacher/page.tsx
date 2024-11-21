import React from 'react'
import Announcements from "@/components/dashboard/Announcements";
import EventCalendar from "@/components/dashboard/EventCalendar";
import BigCalendar from '@/components/BigCalendar';

const StudentPanel = () => {
  return (
    <div className="flex gap-4 flex-col lg:flex-row w-full">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col flex-grow gap-4">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </div>
      </div>


      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  )
}

export default StudentPanel