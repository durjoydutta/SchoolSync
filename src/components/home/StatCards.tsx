'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

interface Stat {
  value: string | number
  label: string
}

interface StatCardsProps {
  stats: Stat[]
}

const StatCards: React.FC<StatCardsProps> = ({ stats }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="w-full flex flex-wrap justify-center items-stretch gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex-1"
        >
          <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
            <CardContent className="p-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl font-bold text-blue-600 dark:text-blue-400"
              >
                {stat.value}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                {stat.label}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StatCards

