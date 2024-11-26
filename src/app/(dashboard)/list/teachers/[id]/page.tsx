import prisma from '@/lib/prisma';
import React from 'react'

const SingleTeacherpage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {

  const teacher = await prisma.teacher.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      subjects: true,
      classes: true,
    },
  });

  return (
    <div className='h-svh flex justify-center items-center'>
      <div key={id} className="flex flex-col justify-center items-center h-svh gap-4">
        <div className="">Teacher Name: {teacher?.name}</div>
        <div className="">Subjects: {teacher?.subjects.map(subject=><p>{subject.name}</p>)}</div>
        {/* <div className="">Classes: {teacher?.class.name}</div> */}
      </div>
    </div>
  )
}

export default SingleTeacherpage