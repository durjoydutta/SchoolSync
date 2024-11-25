const SingleStudentPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      Page for Student {id}
    </div>
  )
}

export default SingleStudentPage;