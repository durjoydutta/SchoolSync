'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { TypeIcon as type, LucideIcon, ArrowRight } from 'lucide-react'
import Link from "next/link"

interface Dashboard {
  href: string
  label: string
  icon: LucideIcon
  color: string
}

interface DashboardCardsProps {
  dashboards: Dashboard[]
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ dashboards }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {dashboards.map((item, index) => (
        <motion.div
          key={item.label}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link href={item.href} className="group">
            <Card className="relative overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              <CardContent className="relative p-6">
                <motion.div
                  className="flex flex-col items-center text-center space-y-4 text-white transition-colors"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <item.icon className="w-12 h-12" />
                  <span className="text-lg font-semibold">{item.label}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default DashboardCards

