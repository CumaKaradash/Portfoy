"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Rust",
  "Go",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
  "Git",
  "Linux",
  "Machine Learning",
  "Data Analysis",
  "System Design",
  "API Development",
]

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Silhouette Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-black rounded-t-full" />
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full" />
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-2 w-16 h-12 bg-black rounded-t-full" />
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 text-gray-300 leading-relaxed"
              >
                <p className="text-lg">
                  Merhaba, ben <span className="text-white font-semibold">Cuma Karadaş</span> — yazılım geliştirme ile
                  karmaşayı sadeleştirmeye çalışan, sistemli düşünen bir geliştiriciyim.
                </p>

                <p>
                  Kodlamaya önce ihtiyaçtan başladım, sonra bu süreç; düşünceyi yapılandırmanın, veriyi anlamlandırmanın
                  ve üretmenin bir yolu haline geldi. Ağırlıklı olarak TypeScript, Node.js ve veri odaklı web
                  uygulamaları geliştiriyorum. Yazılımı sadece araç değil, aynı zamanda bir ifade biçimi olarak
                  görüyorum.
                </p>

                <p>
                  Şu anda Veri Bilimi alanında örgün eğitimime devam ederken, freelance projeler geliştiriyor ve
                  otomasyon, analiz, kullanıcı deneyimi gibi alanlarda çalışıyorum. İlgi alanlarım; dijital davranış
                  analizi, bilgi güvenliği ve kişisel sistem tasarımı etrafında şekilleniyor.
                </p>

                <p>
                  Sade, işlevsel ve kontrol edilebilir yapılar oluşturmayı seviyorum. Karmaşık görünen şeyleri
                  ölçülebilir ve anlamlı hale getirmek en büyük motivasyonlarımdan biri.
                </p>

                <p className="text-sm text-gray-400 italic">
                  Kod yazmadığım zamanlarda ya kullanıcı arayüzleri tasarlıyor, ya da verileri yapılandırmakla uğraşıyor
                  olabilirim — çoğu zaman ikisi birden.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center">İlgi Alanlarım</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Kişisel veri takibi ve davranışsal dashboard'lar</h3>
                <p className="text-gray-400 text-sm">Günlük yaşamdan veri toplama ve anlamlandırma sistemleri</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Sistem otomasyon araçları ve komut satırı uygulamaları
                </h3>
                <p className="text-gray-400 text-sm">Tekrarlayan işleri otomatikleştiren CLI araçları</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Görsel veri anlatımı ve anlamlandırma</h3>
                <p className="text-gray-400 text-sm">Karmaşık verileri anlaşılır görsellerle sunma</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Modüler, güvenli ve sürdürülebilir yazılım mimarileri
                </h3>
                <p className="text-gray-400 text-sm">Uzun vadeli bakım yapılabilir kod yapıları</p>
              </div>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center">Technologies & Tools</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                >
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
