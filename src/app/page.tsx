import { Bell, Calendar, ChartBar, GraduationCap, Users, UserCircle, BookOpen } from "lucide-react";

import Header from "@/components/home/Header"
import Hero from "@/components/home/Hero"
import DashboardContainer from "@/components/home/DashboardCards"
import StatCards from "@/components/home/StatCards";
import FeatureCards from "@/components/home/FeatureCards";
import GetStartedButton from "@/components/home/GetStarted"

const Homepage = () => {
  const stats = [
    { label: "Active Students", value: "2,000+" },
    { label: "Expert Teachers", value: "150+" },
    { label: "Success Rate", value: "95%" },
    { label: "Daily Classes", value: "100+" },
  ];

  const dashboards = [
    { href: "/admin", label: "Admin Dashboard", icon: Users, color: "from-blue-500 to-blue-700" },
    { href: "/teacher", label: "Teacher Portal", icon: GraduationCap, color: "from-indigo-500 to-indigo-700" },
    { href: "/parent", label: "Parent Access", icon: UserCircle, color: "from-purple-500 to-purple-700" },
    { href: "/student", label: "Student Hub", icon: BookOpen, color: "from-violet-500 to-violet-700" },
  ];

  const features = [
    { icon: Bell, title: "Instant Updates", description: "Real-time notifications about grades, attendance & events" },
    { icon: Calendar, title: "Smart Scheduling", description: "AI-powered class scheduling system" },
    { icon: ChartBar, title: "Performance Analytics", description: "Detailed insights into academic progress" },
  ];

  return (
    <div className="min-h-screen w-full p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 relative overflow-hidden">

      <div className="absolute inset-0 z={-5}">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <Header />
      <Hero />

      <div className="lg:h-svh">
        <div className="h-full flex flex-col gap-4 justify-around items-center max-w-7xl mx-auto px-6 pt-10 pb-2">
          <StatCards stats={stats} />
          <DashboardContainer dashboards = {dashboards} />
          <FeatureCards features={features} />
          <GetStartedButton />
        </div>
      </div>

    </div>
  );
};

export default Homepage;