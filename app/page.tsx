"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Youtube, Code2, Mail, ExternalLink, Moon, Sun, ChevronDown } from "lucide-react"
import Link from "next/link"
import { sendContactEmail } from "./actions"

type Language = "tr" | "en"

const translations = {
  tr: {
    nav: {
      about: "Hakkımda",
      projects: "Projeler",
      blog: "Blog",
      experience: "Deneyim",
      contact: "İletişim",
    },
    hero: {
      title: "Cuma Karadaş",
      subtitle: "Front-End Developer & Technical Educator",
      tagline: "Modern web çözümleri ve kullanıcı odaklı tasarımlar geliştiriyorum",
      cta1: "Projelerime Göz At",
      cta2: "İletişime Geç",
    },
    about: {
      title: "Hakkımda",
      bio: "3 yıllık deneyime sahip, 12+ canlı proje geliştirmiş ve açık kaynak katkılarıyla tanınan bir front-end geliştiriciyim. E-ticaret, portföy ve blog siteleri konusunda uzmanım.",
      experience: "3 Yıl Deneyim",
      projects: "12+ Canlı Proje",
      contributions: "5+ Açık Kaynak Katkısı",
      funFact: "Açık kaynak projelerine 5+ katkı yaptım",
    },
    projects: {
      title: "Öne Çıkan Projeler",
      viewDemo: "Demo",
      viewCode: "Kod",
    },
    writing: {
      title: "Blog & Eğitim İçerikleri",
      readMore: "Devamını Oku",
    },
    opensource: {
      title: "Açık Kaynak Katkılarım",
    },
    experience: {
      title: "Deneyim",
      freelancer: {
        title: "Freelancer Web Geliştiricisi",
        company: "Bionluk & Fiverr",
        period: "Mart 2023 - Günümüz",
        desc: "Web geliştirme, teknik destek ve eğitim içerikleri",
      },
      it: {
        title: "IT Uzmanı",
        company: "Baykan Denim",
        period: "Tem-Ağu 2022",
        desc: "IT altyapısı, ağ yönetimi, veritabanı",
      },
    },
    contact: {
      title: "Bir Proje Üzerinde Çalışalım",
      available: "Freelance çalışmaya açık",
      name: "İsim",
      email: "E-posta",
      message: "Mesaj",
      send: "Gönder",
      copy: "Kopyala",
    },
    footer: {
      copyright: "© 2025 Cuma Karadaş. Built with Next.js & Tailwind CSS",
      made: "Made with ❤️ in Ankara, Turkey",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      blog: "Blog",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      title: "Cuma Karadaş",
      subtitle: "Front-End Developer & Technical Educator",
      tagline: "Building modern web solutions and user-focused designs",
      cta1: "View Projects",
      cta2: "Get in Touch",
    },
    about: {
      title: "About Me",
      bio: "A front-end developer with 3 years of experience, 12+ live projects, and recognized for open-source contributions. I specialize in e-commerce, portfolio, and blog websites.",
      experience: "3 Years Experience",
      projects: "12+ Live Projects",
      contributions: "5+ Open Source Contributions",
      funFact: "Contributed to 5+ open source projects",
    },
    projects: {
      title: "Featured Projects",
      viewDemo: "Demo",
      viewCode: "Code",
    },
    writing: {
      title: "Blog & Educational Content",
      readMore: "Read More",
    },
    opensource: {
      title: "Open Source Contributions",
    },
    experience: {
      title: "Experience",
      freelancer: {
        title: "Freelance Web Developer",
        company: "Bionluk & Fiverr",
        period: "Mar 2023 - Present",
        desc: "Web development, technical support, and educational content",
      },
      it: {
        title: "IT Specialist",
        company: "Baykan Denim",
        period: "Jul-Aug 2022",
        desc: "IT infrastructure, network management, database",
      },
    },
    contact: {
      title: "Let's Work Together",
      available: "Available for freelance work",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      copy: "Copy",
    },
    footer: {
      copyright: "© 2025 Cuma Karadaş. Built with Next.js & Tailwind CSS",
      made: "Made with ❤️ in Ankara, Turkey",
    },
  },
}

const projects = [
  {
    name: "DevFlow-GitHub",
    desc: {
      tr: "Minimalist Geliştirici Üretkenlik Dashboard'u: Pomodoro Timer, GitHub İstatistikleri, Günlük Hedefler ve Kod Parçacıkları",
      en: "Minimalist Developer Productivity Dashboard: Pomodoro Timer, GitHub Stats, Daily Goals, and Code Snippets all in one place",
    },
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Recharts", "SWR", "Zustand", "shadcn/ui"],
    demo: "https://devflowgithub.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "Terminal-Me",
    desc: {
      tr: "Terminal tabanlı bir uygulama. Kullanıcıların terminal üzerinden çeşitli işlemler yürütmesini sağlar",
      en: "Terminal-based application that allows users to perform various operations through the terminal",
    },
    tech: ["TypeScript", "Next.js", "React"],
    demo: "https://terminalme-demo.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "QuizForge",
    desc: {
      tr: "Kullanıcıların kolayca çevrimiçi sınavlar oluşturmasını, düzenlemesini ve yönetmesini sağlayan açık kaynaklı quiz platformu",
      en: "Open-source quiz platform that allows users to easily create, edit, and manage online exams",
    },
    tech: ["TypeScript", "Next.js", "React"],
    demo: "https://quizforge-demo.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "LinkLocker",
    desc: {
      tr: "Kişisel bağlantılarınızı güvenli bir şekilde saklamanızı ve yönetmenizi sağlayan uygulama",
      en: "Application that allows you to securely store and manage your personal links",
    },
    tech: ["TypeScript", "Next.js", "React"],
    demo: "https://linklocker-demo.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "PortfolioBuilder",
    desc: {
      tr: "Kullanıcıların kendi portföy sitelerini kolayca oluşturmalarını sağlayan modern ve özelleştirilebilir platform",
      en: "Modern and customizable platform that allows users to easily create their own portfolio websites",
    },
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    demo: "https://portfolio-builder-demo.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "ResumeGen",
    desc: {
      tr: "Kullanıcı dostu özgeçmiş oluşturma aracı. Modern ve özelleştirilebilir şablonlarla profesyonel CV hazırlama",
      en: "User-friendly resume creation tool. Prepare professional CVs with modern and customizable templates",
    },
    tech: ["TypeScript", "Next.js", "React"],
    demo: "https://resumegen-demo.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "DevLog",
    desc: {
      tr: "Yazılım geliştiricileri için günlük tutma ve not alma uygulaması. Süreçleri, öğrenilenleri ve çözümleri kaydetme",
      en: "Daily logging and note-taking app for software developers. Record processes, learnings, and solutions",
    },
    tech: ["TypeScript", "Next.js", "React"],
    demo: "https://devlog-zeta.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "HabitForge",
    desc: {
      tr: "Günlük alışkanlıklarınızı oluşturmanıza ve takip etmenize yardımcı olan motivasyon uygulaması",
      en: "Motivation app that helps you create and track your daily habits",
    },
    tech: ["TypeScript", "Next.js", "React"],
    demo: "https://habitforge-demo.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "CodeBin",
    desc: {
      tr: "Kod parçacıklarını kolayca kaydedebileceğiniz ve paylaşabileceğiniz platform. Farklı programlama dillerini destekler",
      en: "Platform where you can easily save and share code snippets. Supports different programming languages",
    },
    tech: ["TypeScript", "Next.js", "React"],
    demo: "https://code-bin-gamma.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "CryptoDash",
    desc: {
      tr: "Kripto para piyasalarını takip etmek ve analiz etmek için modern dashboard. Gerçek zamanlı fiyatlar ve grafikler",
      en: "Modern dashboard for tracking and analyzing cryptocurrency markets. Real-time prices and charts",
    },
    tech: ["React", "TypeScript", "Next.js", "Recharts"],
    demo: "https://crypto-dash-black.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "TaskForge",
    desc: {
      tr: "Görevlerinizi daha verimli ve düzenli bir şekilde yönetmenizi sağlayan modern görev yönetimi uygulaması",
      en: "Modern task management app that allows you to manage your tasks more efficiently and organized",
    },
    tech: ["React", "TypeScript", "Next.js", "Zustand"],
    demo: "https://taskforge-demo.vercel.app",
    github: "https://github.com/cumakaradash",
  },
  {
    name: "MindMapMe",
    desc: {
      tr: "Düşüncelerinizi, fikirlerinizi ve projelerinizi görsel olarak haritalandıran etkileşimli zihin haritalama uygulaması",
      en: "Interactive mind mapping app that visually maps your thoughts, ideas, and projects",
    },
    tech: ["React", "TypeScript", "Next.js"],
    demo: "https://mind-map-me.vercel.app",
    github: "https://github.com/cumakaradash",
  },
]

const blogPosts = [
  {
    title: { tr: "Chrome Verimlilik Uzantıları", en: "Chrome Productivity Extensions" },
    excerpt: {
      tr: "Chrome tarayıcısı için çeşitli verimlilik artırıcı uzantılar. Reklam engelleyici, dil çevirici, yapay zeka asistanı ve daha fazlası",
      en: "Various productivity-enhancing extensions for Chrome browser. Ad blocker, language translator, AI assistant, and more",
    },
    readTime: "8 dk",
    topic: { tr: "Verimlilik", en: "Productivity" },
    link: "https://github.com/cumakaradash/Chrome-Verimlilik-Uzantilari",
  },
  {
    title: "DPI (Deep Packet Inspection)",
    excerpt: {
      tr: "Modern internet altyapısında erişim engellemelerinin teknik boyutları, DPI teknolojisinin mimari yapısı ve karşı önlemler",
      en: "Technical aspects of access blocking in modern internet infrastructure, DPI technology architecture, and countermeasures",
    },
    readTime: "15 dk",
    topic: { tr: "Siber Güvenlik", en: "Cybersecurity" },
    link: "https://github.com/cumakaradash/DPI",
  },
  {
    title: "Meta Pixel Rehberi",
    excerpt: {
      tr: "Meta Pixel ayarlarının doğru yapılandırılması. Dönüşüm takibi, hedef kitle oluşturma ve reklam optimizasyonu",
      en: "Proper configuration of Meta Pixel settings. Conversion tracking, audience creation, and ad optimization",
    },
    readTime: "10 dk",
    topic: { tr: "E-ticaret", en: "E-commerce" },
    link: "https://github.com/cumakaradash/Meta-Pixel",
  },
  {
    title: { tr: "Yapay Zeka ve Psikoterapi", en: "AI and Psychotherapy" },
    excerpt: {
      tr: "YZ teknolojilerinin psikoterapi alanına entegrasyonu. Bilişsel-Davranışçı Terapi, etik kaygılar ve insan-YZ iş birliği",
      en: "Integration of AI technologies into psychotherapy. Cognitive-Behavioral Therapy, ethical concerns, and human-AI collaboration",
    },
    readTime: "12 dk",
    topic: { tr: "Yapay Zeka", en: "Artificial Intelligence" },
    link: "https://github.com/cumakaradash/Yapay-Zeka-ve-Psikoterapi",
  },
  {
    title: { tr: "Yapay Zeka Okuryazarlığı", en: "AI Literacy" },
    excerpt: {
      tr: "Yapay zeka teknolojilerini anlama, kullanma ve değerlendirme becerilerini geliştirmeye yönelik kapsamlı eğitim kaynağı",
      en: "Comprehensive educational resource for developing skills to understand, use, and evaluate AI technologies",
    },
    readTime: "10 dk",
    topic: { tr: "Eğitim", en: "Education" },
    link: "https://github.com/cumakaradash/Yapay-Zeka-Okuryazarligi",
  },
  {
    title: { tr: "Awesome RSS Feeds", en: "Awesome RSS Feeds" },
    excerpt: {
      tr: "Popüler web sitelerinden RSS beslemeleri listesi. Detaylı kullanım kılavuzları ve örnekler",
      en: "Curated list of RSS feeds from popular websites with detailed usage guides and examples",
    },
    readTime: "6 dk",
    topic: { tr: "Web", en: "Web" },
    link: "https://github.com/cumakaradash/Awesome-Rss-Feeds",
  },
  {
    title: { tr: "SS7 Protokolü", en: "SS7 Protocol" },
    excerpt: {
      tr: "SS7 protokolünün mimarisi, kullanım alanları ve güvenlik açıklarını detaylı bir şekilde inceleyen makale",
      en: "Detailed article examining the architecture, use cases, and security vulnerabilities of the SS7 protocol",
    },
    readTime: "14 dk",
    topic: { tr: "Telekomünikasyon", en: "Telecommunications" },
    link: "https://github.com/cumakaradash/SS7",
  },
  {
    title: { tr: "Meta Pixel Ayarları", en: "Meta Pixel Settings" },
    excerpt: {
      tr: "Meta Pixel ayarlarının doğru yapılandırılması için gerekli kontrol noktaları ve adımlar",
      en: "Required checkpoints and steps for proper configuration of Meta Pixel settings",
    },
    readTime: "8 dk",
    topic: { tr: "Dijital Pazarlama", en: "Digital Marketing" },
    link: "https://github.com/cumakaradash/MetaPixelAyarlari",
  },
  {
    title: { tr: "Zararlı Yazılımlar", en: "Malware" },
    excerpt: {
      tr: "Zararlı yazılım türleri, bulaşma yolları ve korunma yöntemleri. Dijital güvenlik için kapsamlı rehber",
      en: "Types of malware, infection methods, and protection techniques. Comprehensive guide for digital security",
    },
    readTime: "11 dk",
    topic: { tr: "Siber Güvenlik", en: "Cybersecurity" },
    link: "https://github.com/cumakaradash/Zararli-Yazilimlar",
  },
]

const openSource = [
  {
    name: "awesome-datascience",
    desc: { tr: "Tüm projeyi Türkçe'ye çevirdim", en: "Translated entire project to Turkish" },
    stars: "24k+",
  },
  {
    name: "awesome-web-security",
    desc: { tr: "Web güvenlik kaynakları", en: "Web security resources" },
    stars: "11k+",
  },
  { name: "awesome-web-hacking", desc: { tr: "Web uygulama güvenliği", en: "Web application security" }, stars: "5k+" },
  {
    name: "awesome-threat-intelligence",
    desc: { tr: "Tehdit istihbaratı kaynakları", en: "Threat intelligence resources" },
    stars: "7k+",
  },
  {
    name: "Artillery-Hornet-Mods",
    desc: { tr: "3D yazıcı modifikasyonları", en: "3D printer modifications" },
    stars: "200+",
  },
]

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("tr")
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("cumakaradash@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)

    const formData = new FormData(e.currentTarget)
    const result = await sendContactEmail(formData)

    setIsSubmitting(false)

    if (result.success) {
      setSubmitSuccess(true)
      ;(e.target as HTMLFormElement).reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } else {
      alert(result.error || "Failed to send message")
    }
  }

  const t = translations[lang]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            Cuma Karadash
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {t.nav.blog}
            </button>
            <button
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border border-border rounded-lg p-1">
              <button
                onClick={() => setLang("tr")}
                className={`flex items-center gap-1 px-3 py-1 rounded transition-colors ${
                  lang === "tr" ? "bg-foreground text-background" : "hover:bg-muted"
                }`}
              >
                <span className="text-lg">🇹🇷</span>
                <span className="text-sm font-medium">TR</span>
              </button>
              <button
                onClick={() => setLang("en")}
                className={`flex items-center gap-1 px-3 py-1 rounded transition-colors ${
                  lang === "en" ? "bg-foreground text-background" : "hover:bg-muted"
                }`}
              >
                <span className="text-lg">🇬🇧</span>
                <span className="text-sm font-medium">EN</span>
              </button>
            </div>

            {/* Theme Switcher */}
            <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-lg bg-transparent">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">{t.hero.subtitle}</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.hero.tagline}</p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.cta2}
            </Button>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://linkedin.com/in/cumakaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/cumakaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://medium.com/@CumaKaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Code2 className="h-6 w-6" />
            </Link>
            <Link
              href="https://codepen.io/CumaKaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Code2 className="h-6 w-6" />
            </Link>
            <Link
              href="https://youtube.com/@CumaKaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t.about.bio}</p>
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center border-2">
                  <div className="text-3xl font-bold mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">{t.about.experience}</div>
                </Card>
                <Card className="p-4 text-center border-2">
                  <div className="text-3xl font-bold mb-1">12+</div>
                  <div className="text-sm text-muted-foreground">{t.about.projects}</div>
                </Card>
                <Card className="p-4 text-center border-2">
                  <div className="text-3xl font-bold mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">{t.about.contributions}</div>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Zustand",
                  "SWR",
                  "Recharts",
                  "PHP",
                  "SQL",
                  "Linux",
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground italic">💡 {t.about.funFact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.name} className="p-6 hover:scale-105 transition-transform border-2">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.desc[lang]}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-background rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {t.projects.viewDemo}
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href={project.github} target="_blank">
                      <Github className="h-4 w-4 mr-1" />
                      {t.projects.viewCode}
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.writing.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="p-6 hover:scale-105 transition-transform border-2">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold">
                    {typeof post.title === "string" ? post.title : post.title[lang]}
                  </h3>
                  <span className="text-xs bg-muted px-2 py-1 rounded whitespace-nowrap ml-2">
                    {typeof post.topic === "string" ? post.topic : post.topic[lang]}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{post.excerpt[lang]}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={post.link} target="_blank">
                      {t.writing.readMore} →
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.opensource.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {openSource.map((repo) => (
              <Card key={repo.name} className="p-4 hover:scale-105 transition-transform border-2">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-sm">{repo.name}</h3>
                  <span className="text-xs text-muted-foreground">⭐ {repo.stars}</span>
                </div>
                <p className="text-xs text-muted-foreground">{repo.desc[lang]}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.experience.title}</h2>
          <div className="space-y-8">
            <Card className="p-6 border-l-4 border-l-foreground">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">{t.experience.freelancer.title}</h3>
                <span className="text-sm text-muted-foreground">{t.experience.freelancer.period}</span>
              </div>
              <p className="text-muted-foreground font-medium mb-2">{t.experience.freelancer.company}</p>
              <p className="text-sm text-muted-foreground">{t.experience.freelancer.desc}</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-foreground">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">{t.experience.it.title}</h3>
                <span className="text-sm text-muted-foreground">{t.experience.it.period}</span>
              </div>
              <p className="text-muted-foreground font-medium mb-2">{t.experience.it.company}</p>
              <p className="text-sm text-muted-foreground">{t.experience.it.desc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-600 dark:text-green-400 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">{t.contact.available}</span>
          </div>
          <Card className="p-8 border-2">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 text-lg mb-2">
                <Mail className="h-5 w-5" />
                <span className="font-mono">cumakaradash@gmail.com</span>
              </div>
              <Button size="sm" variant="outline" onClick={handleCopyEmail}>
                {emailCopied ? "Kopyalandı! ✓" : t.contact.copy}
              </Button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input name="name" placeholder={t.contact.name} className="bg-background" required />
              <Input name="email" type="email" placeholder={t.contact.email} className="bg-background" required />
              <Textarea name="message" placeholder={t.contact.message} rows={5} className="bg-background" required />
              <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (lang === "tr" ? "Gönderiliyor..." : "Sending...") : t.contact.send}
              </Button>
              {submitSuccess && (
                <p className="text-green-600 dark:text-green-400 text-sm">
                  {lang === "tr" ? "Mesajınız başarıyla gönderildi!" : "Your message was sent successfully!"}
                </p>
              )}
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex gap-4 justify-center mb-4">
            <Link
              href="https://linkedin.com/in/cumakaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/cumakaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://medium.com/@CumaKaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Code2 className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com/@CumaKaradash"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mb-1">{t.footer.copyright}</p>
          <p className="text-sm text-muted-foreground">{t.footer.made}</p>
        </div>
      </footer>
    </div>
  )
}
