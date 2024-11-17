import Link from "next/link";

const Homepage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-lamaPurple dark:bg-#121212 gap-4">
      <div className="text-3xl font-bold text-gray-800">SchoolSync</div>
      <div className="text-xl font-bold text-gray-800">Next-Gen School Management</div>
      <div className="panels flex justify-between gap-2">
        <Link
          href="/admin"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Admin
        </Link>
        <Link
          href="/teacher"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Teacher
        </Link>
        <Link
          href="/parent"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Parent
        </Link>
        <Link
          href="/student"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Student
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
