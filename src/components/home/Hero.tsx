import { Badge } from "@/components/ui/badge";

const Hero = () => {
    return (
        <div className="hero h-svh flex flex-col justify-center items-center text-center gap-4">
            <Badge variant="outline" className="px-4 py-1 rounded-full text-sm lg:text-lg animate-fade-in">
                Transforming Education
            </Badge>

            <h1 className="mx-auto text-6xl xl:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-3">
                SchoolSync
            </h1>

            <p className="text-3xl xl:text-5xl font-semibold text-gray-800 dark:text-gray-100">
                Next-Gen School Management
            </p>

            <p className="mt-8 text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-4xl mx-auto">
                Experience the future of education management with our comprehensive platform that seamlessly connects administrators, teachers, students, and parents.
            </p>
        </div>
  )
}

export default Hero