import Link from "next/link";

const Homepage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-smoke-900 dark:bg-#121212 gap-4">
      <div className="text-4xl font-bold text-gray-800">SchoolSync</div>
      <div className="flex flex-col justify-center items-center gap-2 text-xl font-bold text-gray-800">
        <span>Welcome to</span>
        <span>Next-Gen School Management</span>
      </div>
      <div className="panels flex justify-between flex-wrap gap-2">
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
