"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TerminalText } from "@/components/terminal-text"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [showButton, setShowButton] = useState(false)

  return (
    // Değişiklik: min-h-screen yerine h-[calc(100vh-5rem)] kullanıldı.
    // Layout'taki pt-20 (5rem) payı düşüldü ve overflow-hidden eklendi.
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-left max-w-2xl mx-auto">
            <TerminalText
              text="Merhaba, ben Cuma. Sistemler kurar, problemleri çözer ve bazen tasarım yaparım. Kod, düşünme şeklimdir."
              onComplete={() => setShowButton(true)}
            />
          </div>

          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  Projeleri Gör
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
