import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Students = async () => {
  const students = await prisma.student.findMany()

  return (
    <>
      <h1 className='w-full font-bold text-2xl text-center my-4'>List of all students</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className='text-center'>
              <td>{student.id}</td>
              <td>{student.username}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.email}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Students
