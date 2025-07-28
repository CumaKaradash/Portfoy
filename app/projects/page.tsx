"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const categories = ["Tümü", "Web", "CLI", "Veri", "Güvenlik", "Finans", "AI"]

const projects = [
  {
    id: 1,
    name: "TaskForge",
    description: "Zaman bazlı iş takibi, Pomodoro tekniği ve detaylı analitikler içeren görev yönetim uygulaması.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS", "PostgreSQL", "Auth.js"],
    github: "https://github.com/cumakaradash/TaskForge",
    demo: "https://taskforge-demo.vercel.app",
  },
  {
    id: 2,
    name: "CryptoDash",
    description: "Kripto para piyasası verilerini izleme ve analiz etme dashboard'u. Gerçek zamanlı fiyat takibi.",
    category: "Finans",
    tech: ["React", "TypeScript", "Recharts", "CoinGecko API", "Zustand"],
    github: "https://github.com/cumakaradash/CryptoDash",
    demo: "https://cryptodash-demo.vercel.app",
  },
  {
    id: 3,
    name: "DevLog",
    description: "Geliştirici günlükleri ve teknik blog yazıları için özel tasarlanmış yayın platformu.",
    category: "Web",
    tech: ["Astro", "TypeScript", "Markdown", "Supabase"],
    github: "https://github.com/cumakaradash/DevLog",
    demo: "https://devlog-demo.vercel.app",
  },
  {
    id: 4,
    name: "VaultSafe",
    description: "Şifrelenmiş parola ve gizli veri saklama uygulaması. Web Crypto API ile güvenli depolama.",
    category: "Güvenlik",
    tech: ["Next.js", "TypeScript", "Web Crypto API", "PostgreSQL", "Prisma", "JWT"],
    github: "https://github.com/cumakaradash/VaultSafe",
    demo: null,
  },
  {
    id: 5,
    name: "CodeBin",
    description: "Gerçek zamanlı kod paylaşım aracı. Snippet paylaşımı ve canlı kod gösterimi.",
    category: "Web",
    tech: ["React", "TypeScript", "Monaco Editor", "Socket.IO", "Express.js", "MongoDB"],
    github: "https://github.com/cumakaradash/CodeBin",
    demo: "https://codebin-demo.vercel.app",
  },
  {
    id: 6,
    name: "BudgetFlow",
    description: "Kişisel finans takip aracı. Gelir, gider analizi ve tasarruf planlaması.",
    category: "Finans",
    tech: ["React", "TypeScript", "Chart.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/cumakaradash/BudgetFlow",
    demo: "https://budgetflow-demo.vercel.app",
  },
  {
    id: 7,
    name: "MindMapMe",
    description: "Görsel düşünce diyagramları ve zihin haritaları oluşturma aracı. Offline desteği.",
    category: "Web",
    tech: ["React", "TypeScript", "Konva.js", "Zustand", "IndexedDB"],
    github: "https://github.com/cumakaradash/MindMapMe",
    demo: "https://mindmapme-demo.vercel.app",
  },
  {
    id: 8,
    name: "HabitForge",
    description: "Günlük alışkanlık takibi ve motivasyon uygulaması. İlerleme analitikleri.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chakra UI", "Clerk"],
    github: "https://github.com/cumakaradash/HabitForge",
    demo: "https://habitforge-demo.vercel.app",
  },
  {
    id: 9,
    name: "SecureChat",
    description: "Uçtan uca şifreli, güvenli mesajlaşma uygulaması. Local-first yaklaşım.",
    category: "Güvenlik",
    tech: ["React", "TypeScript", "WebRTC", "PeerJS", "Web Crypto API", "Zustand"],
    github: "https://github.com/cumakaradash/SecureChat",
    demo: null,
  },
  {
    id: 10,
    name: "GitInsight",
    description: "GitHub aktivite analiz aracı. Kullanıcı commit, star ve issue verilerini görselleştirme.",
    category: "Veri",
    tech: ["Next.js", "TypeScript", "GitHub GraphQL API", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/cumakaradash/GitInsight",
    demo: "https://gitinsight-demo.vercel.app",
  },
  {
    id: 11,
    name: "ResumeGen",
    description: "Markdown'dan otomatik özgeçmiş oluşturucu. PDF export ve özelleştirilebilir şablonlar.",
    category: "Web",
    tech: ["React", "TypeScript", "jsPDF", "Tailwind CSS", "Zod", "Formik"],
    github: "https://github.com/cumakaradash/ResumeGen",
    demo: "https://resumegen-demo.vercel.app",
  },
  {
    id: 12,
    name: "SiteUptime",
    description: "Web sitelerini izleme aracı. Uptime/downtime logları ve bildirim sistemi.",
    category: "Web",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Express.js", "Telegram API"],
    github: "https://github.com/cumakaradash/SiteUptime",
    demo: null,
  },
  {
    id: 13,
    name: "AI Tutor",
    description: "ChatGPT API destekli öğrenme asistanı. Kişiselleştirilmiş eğitim modülleri.",
    category: "AI",
    tech: ["React", "TypeScript", "OpenAI API", "Zustand", "Tailwind CSS"],
    github: "https://github.com/cumakaradash/AI-Tutor",
    demo: "https://ai-tutor-demo.vercel.app",
  },
  {
    id: 14,
    name: "Portfolio Builder",
    description: "No-code kişisel site üreticisi. Sürükle-bırak ile portföy tasarlama.",
    category: "Web",
    tech: ["React", "TypeScript", "DnD Kit", "Framer Motion", "Firebase"],
    github: "https://github.com/cumakaradash/Portfolio-Builder",
    demo: "https://portfolio-builder-demo.vercel.app",
  },
  {
    id: 15,
    name: "LogAnalyzer",
    description: "Apache/Nginx log dosyalarını analiz eden web uygulaması. Büyük veri desteği.",
    category: "Veri",
    tech: ["React", "TypeScript", "Papaparse", "Tailwind CSS", "Web Workers"],
    github: "https://github.com/cumakaradash/LogAnalyzer",
    demo: "https://loganalyzer-demo.vercel.app",
  },
  {
    id: 16,
    name: "QuizForge",
    description: "Dinamik quiz oluşturma platformu. Admin panel ve kullanıcı puanlama sistemi.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "React Hook Form", "Clerk"],
    github: "https://github.com/cumakaradash/QuizForge",
    demo: "https://quizforge-demo.vercel.app",
  },
  {
    id: 17,
    name: "BlogIndexer",
    description: "RSS üzerinden içerik toplayıcı. Belirli bloglardan otomatik içerik toplama.",
    category: "Veri",
    tech: ["Express.js", "TypeScript", "RSS Parser", "MongoDB", "Next.js"],
    github: "https://github.com/cumakaradash/BlogIndexer",
    demo: null,
  },
  {
    id: 18,
    name: "LinkLocker",
    description: "Kişisel bağlantı yöneticisi. Bookmark klasörleme, notlar ve etiketleme sistemi.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "PlanetScale", "Prisma", "Tailwind UI", "Auth.js"],
    github: "https://github.com/cumakaradash/LinkLocker",
    demo: "https://linklocker-demo.vercel.app",
  },
  {
    id: 19,
    name: "CodeReviewPal",
    description: "AI destekli kod inceleme yardımcısı. Kod snippet'lerini değerlendirme ve öneriler.",
    category: "AI",
    tech: ["React", "TypeScript", "GPT API", "Monaco Editor", "Zustand"],
    github: "https://github.com/cumakaradash/CodeReviewPal",
    demo: "https://codereviewpal-demo.vercel.app",
  },
  {
    id: 20,
    name: "TerminalMe",
    description: "Web tabanlı terminal simülasyonu. Özel komut sistemi ve JSON çıktıları.",
    category: "CLI",
    tech: ["React", "TypeScript", "XTerm.js", "Zustand"],
    github: "https://github.com/cumakaradash/TerminalMe",
    demo: "https://terminalme-demo.vercel.app",
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")

  const filteredProjects =
    selectedCategory === "Tümü" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Projeler</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modern web teknolojileri ile geliştirilmiş, gerçek dünya problemlerini çözen uygulamalar.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{project.name}</CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Kod
                        </a>
                      </Button>
                      {project.demo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
