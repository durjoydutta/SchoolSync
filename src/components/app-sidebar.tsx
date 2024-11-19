"use client"

import Link from "next/link"
import Image from "next/image"
import {
  House,
  BarChart3,
  Calendar,
  FileText,
  GraduationCap,
  Layers,
  Settings2,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "ddc",
    email: "contact.durjoy@gmail.com",
    avatar: "https://github.com/durjoydutta.png",
  },
  teams: [
    {
      name: "Students",
      logo: GraduationCap,
      plan: "Leadership",
    },

    {
      name: "Teachers",
      logo: GraduationCap,
      plan: "Academics",
    },
    {
      name: "Staff",
      logo: Users,
      plan: "Administration",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: BarChart3,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Key Metrics",
          url: "#",
        },
        {
          title: "Announcements",
          url: "#",
        },
      ],
    },
    {
      title: "Academic Management",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Class Schedules",
          url: "#",
        },
        {
          title: "Subjects",
          url: "#",
        },
        {
          title: "Assignments",
          url: "#",
        },
      ],
    },
    {
      title: "Staff",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Teachers",
          url: "#",
        },
        {
          title: "Support Staff",
          url: "#",
        },
        {
          title: "Attendance",
          url: "#",
        },
      ],
    },
    {
      title: "Students",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Student List",
          url: "#",
        },
        {
          title: "Admissions",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Attendance",
          url: "#",
        },
        {
          title: "Grades",
          url: "#",
        },
        {
          title: "Fees",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General Settings",
          url: "#",
        },
        {
          title: "Roles & Permissions",
          url: "#",
        },
        {
          title: "System Preferences",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Exam Planning",
      url: "#",
      icon: Calendar,
    },
    {
      name: "Event Management",
      url: "#",
      icon: Layers,
    },
    {
      name: "Library System",
      url: "#",
      icon: FileText,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: FileText,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
