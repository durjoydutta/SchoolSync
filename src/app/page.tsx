import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> {/* Added Tailwind classes */}
      <div className="text-3xl font-bold text-gray-800">Homepage</div> {/* Enhanced styling */}
      <Link 
        href="/admin" 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" // Added Tailwind classes
      >
        Admin Panel
      </Link>
    </div>
  );
};

export default Homepage;
