import { useParams, Link } from 'react-router-dom'
import { getDomainBySlug, domains } from '@/data/domains'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CTA from '@/components/cta'
import {
  FileText, Shield, BarChart3, Lock, Building2, CreditCard, ShieldAlert, Users,
  FileCheck, Brain, ClipboardList, Monitor, Heart, Video, Workflow, Activity,
  Layers, Truck, Cpu, CheckCircle, Settings, Smile, Wifi, Rocket,
  Globe, Landmark, PieChart, ShieldCheck, ArrowLeft, ChevronRight,
  ArrowUpRight, Cloud, Database, Code, Palette, Server, Sparkles, ShieldHalf,
  Box, Smartphone, Link as LinkIcon, Blocks, Scale, Zap, Headphones, Lightbulb,
  ShoppingCart, Gift, TrendingUp, BookOpen, Play, FolderOpen, Radio,
  Factory, ClipboardCheck, Bot,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, Shield, BarChart3, Lock, Building2, CreditCard, ShieldAlert, Users,
  FileCheck, Brain, ClipboardList, Monitor, Heart, Video, Workflow, Activity,
  Layers, Truck, Cpu, CheckCircle, Settings, Smile, Wifi, Rocket,
  Globe, Landmark, PieChart, ShieldCheck, Cloud, Code, Smartphone,
  Link: LinkIcon, Blocks, Scale, Zap, Headphones, Lightbulb,
  ShoppingCart, Gift, TrendingUp, BookOpen, Play, FolderOpen, Radio,
  Factory, ClipboardCheck, Bot, Server,
}

const categoryConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; label: string; color: string; bg: string; border: string }> = {
  cloud:    { icon: Cloud,     label: 'Cloud',          color: 'text-sky-700',     bg: 'bg-sky-50',     border: 'border-sky-200/80' },
  data:     { icon: Database,  label: 'Data & Storage', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200/80' },
  devops:   { icon: Box,       label: 'DevOps',         color: 'text-violet-700',  bg: 'bg-violet-50',  border: 'border-violet-200/80' },
  frontend: { icon: Palette,   label: 'Frontend',       color: 'text-pink-700',    bg: 'bg-pink-50',    border: 'border-pink-200/80' },
  backend:  { icon: Server,    label: 'Backend',        color: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-200/80' },
  ai:       { icon: Sparkles,  label: 'AI & Analytics', color: 'text-orange-700',  bg: 'bg-orange-50',  border: 'border-orange-200/80' },
  security: { icon: ShieldHalf, label: 'Security',      color: 'text-red-700',     bg: 'bg-red-50',     border: 'border-red-200/80' },
  platform: { icon: Code,      label: 'Platforms',      color: 'text-indigo-700',  bg: 'bg-indigo-50',  border: 'border-indigo-200/80' },
}

export default function DomainPage() {
  const { slug } = useParams<{ slug: string }>()
  const domain = getDomainBySlug(slug || '')

  if (!domain) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Domain not found</h1>
          <Link to="/" className="text-sm text-orange-500 font-medium hover:underline inline-flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const techByCategory = domain.techStack.reduce<Record<string, typeof domain.techStack>>((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = []
    acc[tech.category].push(tech)
    return acc
  }, {})

  const hasVerticals = domain.verticals && domain.verticals.length > 0

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero: Title + Description + Image right ── */}
      <section className="pt-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                We Work With
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">{domain.heroTitle}</h1>
              <p className="text-gray-500 text-[17px] leading-relaxed mb-10">{domain.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4">
                {domain.stats.map(s => (
                  <div key={s.label} className="px-6 py-4 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-3xl font-bold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200">
                <img src={domain.image} alt={domain.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-orange-500/10 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-gray-100 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Verticals (if present) ── */}
      {hasVerticals && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Industry Trust & Key Clients</p>
              <h2 className="text-2xl font-bold text-gray-900">Domains We Serve</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {domain.verticals!.map((v) => (
                <div
                  key={v.title}
                  className="group relative rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-orange-300 hover:shadow-md transition-all duration-300"
                >
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {v.title}
                    </h3>

                    {/* Brief */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{v.brief}</p>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {v.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-orange-50 group-hover:text-orange-700 group-hover:border-orange-200 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Clients */}
                    {v.clients && v.clients.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2.5">Select Clients</p>
                        <div className="space-y-1.5">
                          {v.clients.map(c => (
                            <div key={c} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                              <p className="text-[13px] text-gray-700 font-medium">{c}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Solutions ── */}
      <section className={`py-16 ${hasVerticals ? 'border-t border-gray-100' : 'border-t border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">What We Deliver</p>
            <h2 className="text-2xl font-bold text-gray-900">Our {domain.title} Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {domain.solutions.map((solution) => {
              const Icon = iconMap[solution.icon]
              return (
                <div
                  key={solution.title}
                  className="group p-6 rounded-xl border border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100 mb-4">
                    {Icon ? <Icon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{solution.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-16 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Technology Stack</p>
            <h2 className="text-2xl font-bold text-gray-900">Tools & Infrastructure</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(techByCategory).map(([category, techs]) => {
              const config = categoryConfig[category]
              if (!config) return null
              const CatIcon = config.icon
              return (
                <div key={category} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className={`w-7 h-7 rounded-lg ${config.bg} ${config.color} flex items-center justify-center`}>
                      <CatIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{config.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {techs.map(tech => (
                      <span
                        key={tech.label}
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${config.bg} ${config.color} border ${config.border}`}
                      >
                        {tech.label}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Why Auisy</p>
            <h2 className="text-2xl font-bold text-gray-900">Key Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {domain.capabilities.map((cap) => {
              const Icon = iconMap[cap.icon]
              return (
                <div key={cap.title} className="p-5 rounded-xl border border-gray-200 bg-white">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center mb-4">
                    {Icon ? <Icon className="w-4.5 h-4.5" /> : <CheckCircle className="w-4.5 h-4.5" />}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{cap.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-16 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Success Stories</p>
            <h2 className="text-2xl font-bold text-gray-900">Case Studies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {domain.caseStudies.map((cs) => (
              <div key={cs.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100 mb-4">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-3">{cs.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cs.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore Other Domains ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">More Domains</p>
            <h2 className="text-2xl font-bold text-gray-900">Explore Other Industries</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {domains
              .filter(d => d.slug !== domain.slug)
              .map(d => (
                <Link
                  key={d.slug}
                  to={`/domains/${d.slug}`}
                  className="group flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50/30 transition-all duration-200"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                    {d.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
