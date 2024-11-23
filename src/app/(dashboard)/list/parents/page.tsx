import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Parents = async () => {
  const parents = await prisma.parent.findMany()

  return (
    <>
      <h1 className='w-full font-bold text-2xl text-center my-4'>List of all parents</h1>
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
          {parents.map((parent) => (
            <tr key={parent.id} className='text-center'>
              <td>{parent.id}</td>
              <td>{parent.username}</td>
              <td>{parent.name}</td>
              <td>{parent.surname}</td>
              <td>{parent.email}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Parents
