import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import WorkSection from '@/components/WorkSection'
import ApproachSection from '@/components/ApproachSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <WorkSection />
        <ApproachSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}


