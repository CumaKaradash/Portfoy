"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const categories = ["Tümü", "Web", "Freelance", "CLI", "Veri", "Finans", "Uzantılar"]

const projects = [
  {
    id: 22,
    name: "Klin. Psik. Busenaz Otlu",
    description: "Klinik Psikolog Busenaz Otlu için kişisel marka ve randevu web sitesi.",
    category: "Freelance",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Resend"],
    github: null,
    demo: "https://www.busenazotlu.com/",
  },
  {
    id: 21,
    name: "Mystic Letters",
    description: "Anonim mektup platformu. 'Bazı kelimelerin seyahat etmesi zaman alır.' konseptli sosyal deney.",
    category: "Web",
    tech: ["Next.js", "Supabase", "Framer Motion", "Tailwind CSS"],
    github: null,
    demo: "https://mistborne.vercel.app/",
  },
  {
    id: 20,
    name: "Engelleri Aşın Derneği",
    description: "Engelleri Aşın Derneği için geliştirilen kurumsal web sitesi ve proje tanıtım platformu.",
    category: "Freelance",
    tech: ["Next.js", "TypeScript", "CMS", "Tailwind CSS"],
    github: null,
    demo: "https://www.engelleriasin.org/",
  },
  {
    id: 18,
    name: "GitHub Stats",
    description: "GitHub profiliniz için özelleştirilebilir istatistik kartları oluşturucu.",
    category: "Veri",
    tech: ["React", "TypeScript", "Vercel OG", "GitHub API"],
    github: null,
    demo: "https://githubstats-nonefiles.vercel.app/",
  },
  {
    id: 17,
    name: "Youth United for Change",
    description: "Sürdürülebilirlik ve ekolojik denge projesi için topluluk ve farkındalık platformu (ESC30).",
    category: "Freelance",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: null,
    demo: "https://www.youthunitedtogether.com/",
  },
  {
    id: 16,
    name: "LoanSense",
    description: "Mortgage, kredi ve refinansman hesaplama araçları. Anlık ve detaylı finansal analiz.",
    category: "Freelance",
    tech: ["React", "TypeScript", "Math.js", "Tailwind CSS"],
    github: null,
    demo: "https://nonefiles-finans.vercel.app/",
  },
  {
    id: 15,
    name: "AestheticNotion",
    description: "Notion sayfaları için ücretsiz widget oluşturucu. Özelleştirilebilir saat ve hava durumu bileşenleri.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    github: null,
    demo: "https://aesthetic-notion.vercel.app/",
  },
  {
    id: 14,
    name: "Psikoloji Bülteni",
    description: "Psikoloji dünyasından güncel yazılar, makaleler ve içerik platformu.",
    category: "Freelance",
    tech: ["Next.js", "Tailwind CSS", "CMS"],
    github: null,
    demo: "https://psikoloji-bulteni.vercel.app/",
  },
  {
    id: 13,
    name: "CryptoDash",
    description: "Kripto para piyasası verilerini izleme ve analiz etme dashboard'u. Gerçek zamanlı fiyat takibi.",
    category: "Finans",
    tech: ["React", "TypeScript", "Recharts", "CoinGecko API", "Zustand"],
    github: "https://github.com/cumakaradash/CryptoDash",
    demo: "https://cryptodash-demo.vercel.app/",
  },
  {
    id: 12,
    name: "MindMapMe",
    description: "Görsel düşünce diyagramları ve zihin haritaları oluşturma aracı. Offline desteği.",
    category: "Web",
    tech: ["React", "TypeScript", "Konva.js", "Zustand", "IndexedDB"],
    github: "https://github.com/cumakaradash/MindMapMe",
    demo: "https://mindmapme-demo.vercel.app/",
  },
  {
    id: 11,
    name: "QuizForge",
    description: "Dinamik quiz oluşturma platformu. Admin panel ve kullanıcı puanlama sistemi.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "React Hook Form", "Clerk"],
    github: "https://github.com/cumakaradash/QuizForge",
    demo: "https://quizforge-demo.vercel.app/",
  },
  {
    id: 10,
    name: "Portfolio Builder",
    description: "No-code kişisel site üreticisi. Sürükle-bırak ile portföy tasarlama.",
    category: "Web",
    tech: ["React", "TypeScript", "DnD Kit", "Framer Motion", "Firebase"],
    github: null,
    demo: "https://portfolio-builder-demo.vercel.app/",
  },
  {
    id: 9,
    name: "HabitForge",
    description: "Günlük alışkanlık takibi ve motivasyon uygulaması. İlerleme analitikleri.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chakra UI", "Clerk"],
    github: "https://github.com/cumakaradash/HabitForge",
    demo: "https://habitforge-demo.vercel.app/",
  },
  {
    id: 8,
    name: "LinkLocker",
    description: "Kişisel bağlantı yöneticisi. Bookmark klasörleme, notlar ve etiketleme sistemi.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "PlanetScale", "Prisma", "Tailwind UI", "Auth.js"],
    github: "https://github.com/cumakaradash/LinkLocker",
    demo: "https://linklocker-demo.vercel.app/",
  },
  {
    id: 7,
    name: "ResumeGen",
    description: "Markdown'dan otomatik özgeçmiş oluşturucu. PDF export ve özelleştirilebilir şablonlar.",
    category: "Web",
    tech: ["React", "TypeScript", "jsPDF", "Tailwind CSS", "Zod", "Formik"],
    github: "https://github.com/cumakaradash/ResumeGen",
    demo: "https://resumegen-demo.vercel.app/",
  },
  {
    id: 6,
    name: "DevLog",
    description: "Geliştirici günlükleri ve teknik blog yazıları için özel tasarlanmış yayın platformu.",
    category: "Web",
    tech: ["Astro", "TypeScript", "Markdown", "Supabase"],
    github: "https://github.com/cumakaradash/DevLog",
    demo: "https://devlog-demo.vercel.app/",
  },
  {
    id: 5,
    name: "TaskForge",
    description: "Zaman bazlı iş takibi, Pomodoro tekniği ve detaylı analitikler içeren görev yönetim uygulaması.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS", "PostgreSQL", "Auth.js"],
    github: "https://github.com/cumakaradash/TaskForge",
    demo: "https://taskforge-demo.vercel.app/",
  },
  {
    id: 4,
    name: "CodeBin",
    description: "Gerçek zamanlı kod paylaşım aracı. Snippet paylaşımı ve canlı kod gösterimi.",
    category: "Web",
    tech: ["React", "TypeScript", "Monaco Editor", "Socket.IO", "Express.js", "MongoDB"],
    github: "https://github.com/cumakaradash/CodeBin",
    demo: "https://codebin-demo.vercel.app/",
  },
  {
    id: 3,
    name: "DevFlow",
    description: "Geliştirici üretkenlik paneli. Pomodoro zamanlayıcı, GitHub aktivite takibi ve hedefler.",
    category: "Web",
    tech: ["React", "TypeScript", "Vite", "Chart.js"],
    github: "https://github.com/cumakaradash/DevFlow",
    demo: "https://nonefiles-devflow.vercel.app/",
  },
  {
    id: 2,
    name: "TerminalMe",
    description: "Web tabanlı terminal simülasyonu. Özel komut sistemi ve JSON çıktıları.",
    category: "CLI",
    tech: ["React", "TypeScript", "XTerm.js", "Zustand"],
    github: null,
    demo: "https://terminalme-demo.vercel.app/",
  },
  {
    id: 1,
    name: "GitFame",
    description: "GitHub profilinizle yüzleşin. Yapay zeka destekli 'roast' (eleştiri) ve analiz kartları.",
    category: "Veri",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel OG"],
    github: "https://github.com/cumakaradash/GitFame",
    demo: "https://git-fame.vercel.app/",
  },
  {
    id: 23,
    name: "AI Email Replier",
    description: "Gemini API kullanarak Gmail e-postalarına otomatik cevaplar oluşturun.",
    category: "Uzantılar",
    tech: ["Chrome Extension", "Gemini API", "JavaScript"],
    github: "https://github.com/cumakaradash/AI-Reply-Assistant",
    demo: null,
  },
  {
    id: 24,
    name: "Web Master Tools",
    description: "Font bulucu, Dark Mode, Teknoloji ve Performans analizi aracı.",
    category: "Uzantılar",
    tech: ["Chrome Extension", "JavaScript", "Performance API"],
    github: "https://github.com/cumakaradash/Web-Master-Tools",
    demo: null,
  },
  {
    id: 25,
    name: "Data Scraper Lite",
    description: "E-ticaret sitelerinden ürün bilgilerini kazıyan ve CSV olarak indiren hafif bir araç.",
    category: "Uzantılar",
    tech: ["Chrome Extension", "DOM Manipulation", "JavaScript"],
    github: "https://github.com/cumakaradash/Data-Scraper",
    demo: null,
  },
  {
    id: 26,
    name: "Focus Mode",
    description: "Dikkat dağıtıcı unsurları gizleyerek odaklanmanızı sağlar.",
    category: "Uzantılar",
    tech: ["Chrome Extension", "CSS", "JavaScript"],
    github: "https://github.com/cumakaradash/Focus-Mode",
    demo: null,
  },
  {
    id: 27,
    name: "Frosted Focus",
    description: "Estetik ve minimalist bir New Tab eklentisi.",
    category: "Uzantılar",
    tech: ["Chrome Extension", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/cumakaradash/Frosted-Glass-New-Tab",
    demo: null,
  },
  {
    id: 28,
    name: "Quick Note & Save",
    description: "Web sayfalarından hızlıca notlar alın ve saklayın.",
    category: "Uzantılar",
    tech: ["Chrome Extension", "LocalStorage", "JavaScript"],
    github: "https://github.com/cumakaradash/Quick-Note-Save",
    demo: null,
  },
  {
    id: 29,
    name: "Tab Manager",
    description: "Açık sekmeleri yönetin ve temizleyin.",
    category: "Uzantılar",
    tech: ["Chrome Extension", "Tabs API", "JavaScript"],
    github: "https://github.com/cumakaradash/Tab-Manager",
    demo: null,
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
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
                      {/* GitHub butonu sadece link varsa gösterilir */}
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Kod
                          </a>
                        </Button>
                      )}
                      
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
