import PieChart from "./PieChart";
import prisma from "@/lib/prisma";

const CountChartContainer = async () => {
    // const data = await prisma.student.groupBy({
    //     by: ["sex"],
    //     _count: true,
    // });

    // const boys = data.find((d) => d.sex === "MALE")?._count || 0;
    // const girls = data.find((d) => d.sex === "FEMALE")?._count || 0;

    const maleCount = await prisma.student.count({
        where: {
            sex: "MALE",
        },
    });

    const femaleCount = await prisma.student.count({
        where: {
            sex: "FEMALE",
        },
    });

    return (
        <div><PieChart boys={maleCount} girls={femaleCount} /></div>
    );
};

export default CountChartContainer;
