'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureCardsProps {
  features: Feature[]
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ features }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0">
            <CardContent className="p-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              </motion.div>
              <motion.h3
                className="text-lg font-semibold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {feature.description}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default FeatureCards

