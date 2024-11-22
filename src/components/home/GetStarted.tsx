'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"

const scrollToTop = () => {
  const topSection = document.getElementById('navbar')
  if (topSection) {
    topSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const GetStartedButton = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center hover:from-blue-700 hover:to-indigo-700"
        onClick={scrollToTop}
      >
        Get Started Today
      </Button>
    </motion.div>
  )
}

export default GetStartedButton

