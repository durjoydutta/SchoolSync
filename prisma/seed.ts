import { Day, PrismaClient, UserSex } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // ADMINS
    const adminData = [
        {
            username: "durjoydc",
            email: "durjoy.dutta@gmail.com",
            phone: "9876543210",
            name: "Durjoy",
            surname: "Dutta",
        },
        {
            username: "eahtashamummam",
            email: "eahtasham.ummam@gmail.com",
            phone: "9123456789",
            name: "Eahtasham",
            surname: "Ummam",
        },
    ];

    for (const admin of adminData) {
        await prisma.admin.create({ data: admin });
    }

    // GRADE
    for (let i = 1; i <= 6; i++) {
        await prisma.grade.create({
            data: {
                level: i,
            },
        });
    }

    // CLASS
    for (let i = 1; i <= 6; i++) {
        await prisma.class.create({
            data: {
                name: `${i}A`,
                gradeId: i,
                capacity: Math.floor(Math.random() * (30 - 20 + 1)) + 20,
            },
        });
    }

    // SUBJECT
    const subjectData = [
        { name: "Mathematics" },
        { name: "Science" },
        { name: "English" },
        { name: "History" },
        { name: "Geography" },
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Biology" },
        { name: "Computer Science" },
        { name: "Art" },
    ];

    for (const subject of subjectData) {
        await prisma.subject.create({ data: subject });
    }

    // TEACHER
    const teacherNames = [
        { name: "Arun", surname: "Sharma" },
        { name: "Pooja", surname: "Mehta" },
        { name: "Raj", surname: "Kumar" },
        { name: "Anjali", surname: "Verma" },
        { name: "Suresh", surname: "Rana" },
        { name: "Kiran", surname: "Desai" },
        { name: "Amit", surname: "Singh" },
        { name: "Priya", surname: "Patil" },
        { name: "Ravi", surname: "Malhotra" },
        { name: "Neha", surname: "Bose" },
        { name: "Vikas", surname: "Yadav" },
        { name: "Swati", surname: "Chawla" },
        { name: "Manoj", surname: "Agarwal" },
        { name: "Sonal", surname: "Pandey" },
        { name: "Vivek", surname: "Joshi" },
    ];

    for (let i = 1; i <= 15; i++) {
        await prisma.teacher.create({
            data: {
                username: `teacher${i}`,
                name: teacherNames[i - 1].name,
                surname: teacherNames[i - 1].surname,
                email: `teacher${i}@school.com`,
                phone: `91${9000000000 + i}`, // Unique phone numbers
                address: `House No ${i}, Block ${i % 5}, Sector ${i + 5}, Delhi`,
                bloodType: i % 2 === 0 ? "B+" : "O-",
                sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
                subjects: { connect: [{ id: (i % 10) + 1 }] },
                classes: { connect: [{ id: (i % 6) + 1 }] },
                birthday: new Date(new Date().setFullYear(new Date().getFullYear() - (25 + i))),
            },
        });
    }

    // LESSON
    for (let i = 1; i <= 30; i++) {
        await prisma.lesson.create({
            data: {
                name: `Lesson ${i}`,
                day: Day[Object.keys(Day)[Math.floor(Math.random() * Object.keys(Day).length)] as keyof typeof Day],
                startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
                endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
                subjectId: (i % 10) + 1,
                classId: (i % 6) + 1,
                teacherId: (i % 15) + 1,
            },
        });
    }

    // PARENT
    const parentNames = [
        { name: "Rajesh", surname: "Sharma" },
        { name: "Suman", surname: "Patel" },
        { name: "Anil", surname: "Verma" },
        { name: "Neeta", surname: "Gupta" },
        { name: "Vikram", surname: "Reddy" },
        { name: "Pooja", surname: "Kumar" },
        { name: "Suresh", surname: "Singh" },
        { name: "Kavita", surname: "Mehta" },
        { name: "Ravi", surname: "Bansal" },
        { name: "Aarti", surname: "Chawla" },
        { name: "Sanjay", surname: "Joshi" },
        { name: "Priya", surname: "Nair" },
        { name: "Manoj", surname: "Desai" },
        { name: "Tanvi", surname: "Agarwal" },
        { name: "Shivani", surname: "Malhotra" },
        { name: "Deepak", surname: "Kumar" },
        { name: "Neha", surname: "Singh" },
        { name: "Karan", surname: "Yadav" },
        { name: "Ritika", surname: "Sharma" },
        { name: "Mohit", surname: "Gupta" },
        { name: "Sneha", surname: "Patel" },
        { name: "Nikhil", surname: "Verma" },
        { name: "Amit", surname: "Reddy" },
        { name: "Geeta", surname: "Bansal" },
        { name: "Rohit", surname: "Choudhary" },
        { name: "Sakshi", surname: "Joshi" },
        { name: "Arun", surname: "Kumar" },
    ];

    for (let i = 1; i <= parentNames.length; i++) {
        await prisma.parent.create({
            data: {
                username: `parent${i}`,
                name: parentNames[i - 1].name,
                surname: parentNames[i - 1].surname,
                email: `parent${i}@school.com`,
                phone: `91${8000000000 + i}`,
                address: `Apartment ${i}, Block ${i % 5}, Noida`,
            },
        });
    }

    // STUDENT
    const studentNames = [
        { name: "Aarav", surname: "Sharma" },
        { name: "Vivaan", surname: "Patel" },
        { name: "Aditya", surname: "Verma" },
        { name: "Vihaan", surname: "Gupta" },
        { name: "Arjun", surname: "Reddy" },
        { name: "Sai", surname: "Kumar" },
        { name: "Anaya", surname: "Singh" },
        { name: "Aanya", surname: "Mehta" },
        { name: "Ishaan", surname: "Bansal" },
        { name: "Riya", surname: "Choudhary" },
        { name: "Saanvi", surname: "Joshi" },
        { name: "Krishna", surname: "Nair" },
        { name: "Rohan", surname: "Desai" },
        { name: "Tanvi", surname: "Agarwal" },
        { name: "Kavya", surname: "Malhotra" },
        { name: "Shivansh", surname: "Yadav" },
        { name: "Aarohi", surname: "Singh" },
        { name: "Nirvaan", surname: "Kumar" },
        { name: "Rudra", surname: "Sharma" },
        { name: "Aditi", surname: "Patel" },
        { name: "Dev", surname: "Verma" },
        { name: "Mira", surname: "Gupta" },
        { name: "Kiaan", surname: "Reddy" },
        { name: "Pihu", surname: "Kumar" },
        { name: "Reyansh", surname: "Bansal" },
        { name: "Siddharth", surname: "Choudhary" },
        { name: "Tanish", surname: "Joshi" },
        { name: "Aarav", surname: "Nair" },
        { name: "Ritika", surname: "Desai" },
        { name: "Anvi", surname: "Agarwal" },
        { name: "Yash", surname: "Malhotra" },
        { name: "Kunal", surname: "Yadav" },
        { name: "Siddhi", surname: "Sharma" },
        { name: "Riyaan", surname: "Patel" },
        { name: "Aashvi", surname: "Verma" },
        { name: "Dhruv", surname: "Gupta" },
        { name: "Naina", surname: "Reddy" },
        { name: "Lakshya", surname: "Kumar" },
        { name: "Sakshi", surname: "Singh" },
    ];

    for (let i = 1; i <= studentNames.length; i++) {
        await prisma.student.create({
            data: {
                username: `student${i}`,
                name: studentNames[i - 1].name,
                surname: studentNames[i - 1].surname,
                email: `student${i}@school.com`,
                phone: `91${7000000000 + i}`,
                address: `Street ${i}, Area ${i % 6}, Bangalore`,
                bloodType: "O-",
                sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
                parentId: Math.ceil(i / 2),
                gradeId: (i % 6) + 1,
                classId: (i % 6) + 1,
                birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
            },
        });
    }

    // EXAM
    for (let i = 1; i <= 10; i++) {
        await prisma.exam.create({
            data: {
                title: `Exam ${i}`,
                startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
                endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
                lessonId: (i % 30) + 1,
            },
        });
    }

    // ASSIGNMENT
    for (let i = 1; i <= 10; i++) {
        await prisma.assignment.create({
            data: {
                title: `Assignment ${i}`,
                startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
                dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
                lessonId: (i % 30) + 1,
            },
        });
    }

    // RESULT
    for (let i = 1; i <= 10; i++) {
        await prisma.result.create({
            data: {
                score: Math.floor(Math.random() * 100),
                studentId: i,
                ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
            },
        });
    }

    // ATTENDANCE
    for (let i = 1; i <= 10; i++) {
        await prisma.attendance.create({
            data: {
                date: new Date(),
                present: true,
                studentId: i,
                lessonId: (i % 30) + 1,
            },
        });
    }

    // EVENT
    for (let i = 1; i <= 5; i++) {
        await prisma.event.create({
            data: {
                title: `Event ${i}`,
                description: `Description for Event ${i}`,
                startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
                endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
                classId: (i % 5) + 1,
            },
        });
    }

    // ANNOUNCEMENT
    for (let i = 1; i <= 5; i++) {
        await prisma.announcement.create({
            data: {
                title: `Announcement ${i}`,
                description: `Description for Announcement ${i}`,
                date: new Date(),
                classId: (i % 5) + 1,
            },
        });
    }

    console.log("Seeding completed successfully.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });