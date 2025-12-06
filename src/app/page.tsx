"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, Users, Rocket, Heart, Zap, CheckCircle, Mail, User, Phone, MessageSquare, ShoppingCart, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CelestixPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    {
      url: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6326eda8-22c9-44b3-84fe-e90e08ec593f.jpg",
      alt: "Conheça a Celestix Primera"
    },
    {
      url: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/05648fb5-af93-4bd0-a78b-b8dec64055be.jpg",
      alt: "Creators"
    },
    {
      url: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5b60ddf5-937a-43c2-b3fb-d0971d975309.jpg",
      alt: "Venda na Celestix"
    },
    {
      url: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3030bac5-924e-4cea-b34b-7c6060281347.jpg",
      alt: "Clube de Assinaturas"
    },
    {
      url: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5b27e240-0daf-4978-9eae-230de3ab7001.jpg",
      alt: "Quem Somos"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [currentSlide])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Lead capturado:", formData)
    alert("Obrigado pelo interesse! Entraremos em contato em breve.")
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header Roxo Celestix com Logo Centralizada */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-b border-purple-500/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-20">
            {/* Logo Centralizada */}
            <div className="flex-shrink-0">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/dd301634-ea73-476c-af4a-cfc8958236a4.png" 
                alt="Celestix Logo" 
                className="h-10 w-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section com Gradiente Neon */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background com efeito neon */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,255,0.1),transparent_50%)]"></div>
        
        {/* Efeitos de luz neon animados */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/dd301634-ea73-476c-af4a-cfc8958236a4.png" 
              alt="Celestix Logo" 
              className="h-16 md:h-24 w-auto drop-shadow-[0_0_25px_rgba(128,0,255,0.8)]"
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            O Maior Ecossistema de Vendas
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Conectando indústrias, marcas, artistas, atletas, influenciadores e Creators em uma plataforma revolucionária
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 hover:scale-105"
            >
              Fazer Parte do Ecossistema
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300"
              onClick={() => scrollToSection('quem-somos')}
            >
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Comunidade Vibrante", value: "∞" },
              { icon: Sparkles, label: "Produtos Exclusivos", value: "+" },
              { icon: Rocket, label: "Inovação Constante", value: "24/7" },
              { icon: Heart, label: "Impacto Social", value: "100%" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300 hover:scale-105">
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
        
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              O Que É a Celestix?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card principal */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
              <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Nossa Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                A Celestix nasceu com a missão de se tornar o maior ecossistema de vendas que une indústrias, marcas, artistas, atletas, modelos, influenciadores, chefs e muito mais. Nossa plataforma online foi projetada com foco na experiência do cliente, proporcionando uma vivência única que conecta o ambiente online ao offline.
              </p>
            </div>

            {/* Clube de Compra */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <CheckCircle className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Clube de Compra Exclusivo</h3>
              <p className="text-gray-300 leading-relaxed">
                Cada produto adquirido em nosso shopping online vem acompanhado de um eBook exclusivo incluso no valor do produto, que enriquece a experiência de compra e entrega conhecimento valioso ao consumidor.
              </p>
            </div>
          </div>

          {/* Vídeo institucional centralizado */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-4xl rounded-3xl overflow-hidden border-2 border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:shadow-[0_0_80px_rgba(168,85,247,0.6)] transition-all duration-300">
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/60 to-cyan-900/60 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-20 w-20 text-purple-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-2xl font-bold text-purple-300">Vídeo Institucional</p>
                  <p className="text-gray-400 mt-2">Conheça o Ecossistema Celestix</p>
                </div>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
              Nossos Serviços
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Oferecemos uma variedade de serviços, incluindo clubes de assinatura e a rede de afiliados Diamantes, tornando a monetização acessível e colaborativa. Nossa curadoria traz os melhores produtos do mercado associados a Creators, alimentando o crescimento da Creators Economy.
            </p>
          </div>

          {/* CARROSSEL DE IMAGENS */}
          <div className="relative max-w-5xl mx-auto mt-16 mb-20">
            {/* Container do carrossel */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
              {/* Imagens */}
              <div className="relative aspect-video bg-black">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Botões de navegação */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-purple-600/80 hover:bg-purple-600 border border-purple-400/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(168,85,247,0.6)] group"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cyan-600/80 hover:bg-cyan-600 border border-cyan-400/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(6,182,212,0.6)] group"
                aria-label="Próximo slide"
              >
                <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Indicadores (dots) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]'
                        : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Efeitos de luz ao redor do carrossel */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-600/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Departamentos Section */}
      <section id="departamentos" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>
        
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nossos Departamentos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Creator Economy - PRIMEIRO */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-orange-900/30 to-black border border-orange-500/30 backdrop-blur-sm hover:border-orange-500/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-orange-600/20 border border-orange-500/50">
                  <TrendingUp className="h-8 w-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-orange-300">Creator Economy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Potencializamos Creators com ferramentas e oportunidades para monetizar seu trabalho, conectando-os com marcas e produtos alinhados aos seus valores, construindo uma economia colaborativa e sustentável.
                  </p>
                </div>
              </div>
            </div>

            {/* Venda na Celestix Full - SEGUNDO */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-emerald-900/30 to-black border border-emerald-500/30 backdrop-blur-sm hover:border-emerald-500/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/50">
                  <ShoppingCart className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-emerald-300">Venda na Celestix Full</h3>
                  <p className="text-gray-300 leading-relaxed">
                    O conceito Celestix Full representa a solução completa de vendas para indústrias e marcas, com gestão total da operação integrada com Saas, IA, Checkout.
                  </p>
                </div>
              </div>
            </div>

            {/* Incubadora */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-pink-900/30 to-black border border-pink-500/30 backdrop-blur-sm hover:border-pink-500/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(236,72,153,0.4)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-600/20 border border-pink-500/50">
                  <Sparkles className="h-8 w-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-pink-300">Celestix Incubadora ⭐</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Nossa estrela é o programa da Celestix Incubadora que encontra talentos e ajuda eles a virarem sócios de marcas que combinam com nossos valores. A gente também cria e desenvolve a marca de influenciadores e criadores, transformando talento em negócio de verdade.
                  </p>
                </div>
              </div>
            </div>

            {/* Filantrópicos */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/50">
                  <Heart className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-purple-300">Celestix Filantrópicos</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Investimos em projetos sociais e educacionais que abrangem saúde, vestuário, educação e inteligência de negócios, além de promoção da educação financeira e inteligência emocional para crianças em situação de vulnerabilidade. Acreditamos que quanto mais ajudamos, mais somos ajudados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
        
        {/* Efeitos de luz */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <div className="relative z-10 container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Faça Parte do Ecossistema
            </h2>
            <p className="text-xl text-gray-300">
              Entre em contato e descubra como podemos crescer juntos
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-purple-300 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Nome Completo
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-purple-500/50 focus:border-purple-500 text-white placeholder:text-gray-500 rounded-xl"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cyan-300 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white placeholder:text-gray-500 rounded-xl"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-purple-300 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-purple-500/50 focus:border-purple-500 text-white placeholder:text-gray-500 rounded-xl"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-cyan-300 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white placeholder:text-gray-500 rounded-xl resize-none"
                  placeholder="Conte-nos como podemos ajudar você..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 hover:scale-105"
              >
                Enviar Mensagem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
              Venha Fazer Parte!
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Ecossistema inovador e colaborativo, onde o sucesso é construído em conjunto e as oportunidades são infinitas!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Inovação", "Colaboração", "Crescimento", "Impacto Social"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/50 text-purple-300 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-purple-500/20">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex flex-col items-center gap-4">
            {/* Logo em cima */}
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/dd301634-ea73-476c-af4a-cfc8958236a4.png" 
              alt="Celestix Logo" 
              className="h-16 w-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]"
            />
            {/* Ícone embaixo */}
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5aa2fe64-6ff9-404e-a3fe-71560ec78c58.png" 
              alt="Celestix Icon" 
              className="h-12 w-12 drop-shadow-[0_0_15px_rgba(128,0,255,0.6)]"
            />
          </div>
          <p className="text-gray-400 mb-2 mt-6">© 2024 Celestix Ecossistema. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-500">Construindo o futuro da Creators Economy</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
