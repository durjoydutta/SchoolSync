import Link from "next/link";
import { GraduationCap, Users, UserCircle, BookOpen, ArrowRight, Bell, Calendar, ChartBar, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Homepage = () => {
  const stats = [
    { label: "Active Students", value: "2,000+" },
    { label: "Expert Teachers", value: "150+" },
    { label: "Success Rate", value: "95%" },
    { label: "Daily Classes", value: "100+" },
  ];

  const features = [
    { icon: Bell, title: "Instant Updates", description: "Real-time notifications about grades, attendance & events" },
    { icon: Calendar, title: "Smart Scheduling", description: "AI-powered class scheduling system" },
    { icon: ChartBar, title: "Performance Analytics", description: "Detailed insights into academic progress" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 relative overflow-hidden">

      <div className="absolute top-0 right-0 p-6 flex flex-wrap justify-between items-center z-5">


        <div className="flex gap-4">
          <Link href={"/login"}>
            <Button variant="outline" className="bg-white/80 hover:bg-white/90 backdrop-blur-sm">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
              Sign Up Free
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative">
        <div className="flex flex-col items-center max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-8 mb-10">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1 rounded-full text-sm animate-fade-in">
                Transforming Education
              </Badge>

              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-3">
                SchoolSync
              </h1>

              <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                Next-Gen School Management
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Experience the future of education management with our comprehensive platform that seamlessly connects administrators, teachers, students, and parents.
              </p>
            </div>

            <div className="max-w-2xl flex flex-wrap justify-center items-stretch gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="flex flex-1 justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { href: "/admin", label: "Admin Dashboard", icon: Users, color: "from-blue-500 to-blue-700" },
              { href: "/teacher", label: "Teacher Portal", icon: GraduationCap, color: "from-indigo-500 to-indigo-700" },
              { href: "/parent", label: "Parent Access", icon: UserCircle, color: "from-purple-500 to-purple-700" },
              { href: "/student", label: "Student Hub", icon: BookOpen, color: "from-violet-500 to-violet-700" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="group">
                <Card className="relative overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <CardContent className="relative p-6">
                    <div className="flex flex-col items-center text-center space-y-4 group-hover:text-white transition-colors">
                      <item.icon className="w-12 h-12" />
                      <span className="text-lg font-semibold">{item.label}</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="w-full grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;