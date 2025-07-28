"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, Github } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Yapay Zeka Okuryazarlığı",
    description:
      "Modern çağda yapay zeka teknolojilerini anlama, değerlendirme ve etkin kullanma becerileri üzerine kapsamlı bir rehber.",
    date: "2024-01-20",
    readTime: "12 dk okuma",
    category: "AI & Teknoloji",
    github: "https://github.com/cumakaradas/blog/blob/main/yapay-zeka-okuryazarligi.md",
  },
  {
    id: 2,
    title: "Meta Ads ve Pixel Ayarlarında Kontrol Etmen Gereken Tüm Noktalar",
    description:
      "Facebook ve Instagram reklamlarında pixel kurulumu, veri toplama ve optimizasyon için kritik kontrol noktaları.",
    date: "2024-01-15",
    readTime: "8 dk okuma",
    category: "Dijital Pazarlama",
    github: "https://github.com/cumakaradas/blog/blob/main/meta-ads-pixel-kontrol-noktalari.md",
  },
  {
    id: 3,
    title: "Yapay Zeka Psikoterapisindeki Güncel Araştırma Trendleri ve Gelecek Perspektifleri",
    description:
      "AI destekli psikoterapi uygulamalarının mevcut durumu, araştırma sonuçları ve gelecekteki potansiyel gelişmeler.",
    date: "2024-01-10",
    readTime: "15 dk okuma",
    category: "AI & Psikoloji",
    github: "https://github.com/cumakaradas/blog/blob/main/ai-psikoterapi-arastirma-trendleri.md",
  },
  {
    id: 4,
    title: "Meta Pixel Rehberi",
    description:
      "Facebook Pixel kurulumundan veri analizine kadar, e-ticaret ve dijital pazarlama için detaylı uygulama kılavuzu.",
    date: "2024-01-05",
    readTime: "10 dk okuma",
    category: "Dijital Pazarlama",
    github: "https://github.com/cumakaradas/blog/blob/main/meta-pixel-rehberi.md",
  },
  {
    id: 5,
    title: "Signaling System No. 7 (SS7)",
    description:
      "Telekomünikasyon altyapısının omurgası SS7 protokolü: çalışma prensibi, güvenlik açıkları ve modern uygulamalar.",
    date: "2023-12-28",
    readTime: "18 dk okuma",
    category: "Siber Güvenlik",
    github: "https://github.com/cumakaradas/blog/blob/main/ss7-signaling-system.md",
  },
  {
    id: 6,
    title: "İnternet Filtreleme Sistemleri ve DPI Teknolojisi",
    description:
      "Deep Packet Inspection teknolojisi, internet sansürü yöntemleri ve ağ trafiği analiz sistemlerinin teknik incelemesi.",
    date: "2023-12-20",
    readTime: "14 dk okuma",
    category: "Siber Güvenlik",
    github: "https://github.com/cumakaradas/blog/blob/main/internet-filtreleme-dpi.md",
  },
  {
    id: 7,
    title: "Verimliliği Artıran Chrome Uzantıları: Kapsamlı İnceleme",
    description:
      "Günlük iş akışını optimize eden, zaman tasarrufu sağlayan ve odaklanmayı artıran Chrome uzantılarının detaylı analizi.",
    date: "2023-12-15",
    readTime: "9 dk okuma",
    category: "Verimlilik",
    github: "https://github.com/cumakaradas/blog/blob/main/chrome-uzantilari-verimlilik.md",
  },
  {
    id: 8,
    title: "Zararlı Yazılımlar",
    description:
      "Malware türleri, saldırı vektörleri, korunma yöntemleri ve zararlı yazılım analizinde kullanılan teknikler.",
    date: "2023-12-10",
    readTime: "16 dk okuma",
    category: "Siber Güvenlik",
    github: "https://github.com/cumakaradas/blog/blob/main/zararli-yazilimlar.md",
  },
  {
    id: 9,
    title: "RSS Beslemeleri",
    description:
      "RSS teknolojisinin modern web'deki yeri, kişisel bilgi yönetimi ve içerik takibi için pratik kullanım önerileri.",
    date: "2023-12-05",
    readTime: "7 dk okuma",
    category: "Web Teknolojisi",
    github: "https://github.com/cumakaradas/blog/blob/main/rss-beslemeleri.md",
  },
]

const categories = [
  "Tümü",
  "AI & Teknoloji",
  "Dijital Pazarlama",
  "Siber Güvenlik",
  "Verimlilik",
  "Web Teknolojisi",
  "AI & Psikoloji",
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")

  const filteredPosts =
    selectedCategory === "Tümü" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Teknoloji, güvenlik, yapay zeka ve dijital pazarlama üzerine düşünceler ve teknik analizler.
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
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <CardTitle className="text-xl group-hover:text-gray-300 transition-colors leading-tight">
                          {post.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge variant="outline" className="text-xs">
                            <FileText className="h-3 w-3 mr-1" />
                            Markdown
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {post.description}
                    </CardDescription>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <Button variant="outline" size="sm" asChild>
                        <a href={post.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Yazıyı Oku
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Note about content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8"
          >
            <p>Tüm yazılar GitHub Markdown formatında yazılmış ve teknik detaylarla desteklenmiştir.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
