import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ClientTicker from '@/components/clientTicker'
import Expertise from '@/components/expertise'
import Partners from '@/components/partners'
import HowWeOperate from '@/components/HowWeOperate'
import SuccessStories from '@/components/SuccessStories'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientTicker />
      <Expertise />
      <Partners />
      <HowWeOperate />
      <SuccessStories />
      <CTA />
      <Footer />
    </div>
  )
}