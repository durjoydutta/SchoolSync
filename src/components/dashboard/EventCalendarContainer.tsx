import EventCalendar from "@/components/dashboard/EventCalendar";
import prisma from "@/lib/prisma";

const EventCalendarContainer = async () => {
    // Fetch events from the database
    const events = await prisma.event.findMany({
        select: {
            id: true,
            title: true,
            startTime: true,
            description: true,
        },
    });

    // Pack events into an array
    const packedEvents = events.map(event => ({
        id: event.id,
        title: event.title,
        startTime: new Date(event.startTime), // Ensure startTime is a Date object
        description: event.description,
    }));

    return <EventCalendar events={packedEvents} />;
};

export default EventCalendarContainer;
