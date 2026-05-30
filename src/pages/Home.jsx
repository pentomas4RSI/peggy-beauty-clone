import HeroSlider from '../components/HeroSlider'
import FounderSection from '../components/FounderSection'
import ExtensionsFeature from '../components/ExtensionsFeature'
import ServicesShowcase from '../components/ServicesShowcase'
import TestimonialsSection from '../components/TestimonialsSection'
import VisitUsSection from '../components/VisitUsSection'
import FAQSection from '../components/FAQSection'
import ServiceCard from '../components/ServiceCard'

const featuredServices = [
  {
    title: 'Hair Styling',
    description: 'Cuts, blowouts, treatments, color, and occasion styling.',
    features: ['Precision cutting', 'Blowouts & finishing', 'Treatment plans', 'Event styling'],
  },
  {
    title: 'Nail Studio',
    description: 'Classic manicures, gel polish, nail art, and pedicures.',
    features: ['Classic & gel', 'Custom nail art', 'Long-lasting finishes', 'Hygienic prep'],
  },
  {
    title: 'Skin Care',
    description: 'Glow-focused facials, waxing, and personalized treatments.',
    features: ['Glow facials', 'Targeted treatments', 'Professional waxing', 'Homecare guidance'],
  },
]

function Home() {
  return (
    <div className="home">
      <HeroSlider />
      <FounderSection />
      <ExtensionsFeature />
      <ServicesShowcase />
      <TestimonialsSection />
      <VisitUsSection />
      <FAQSection />
      <section className="page" id="featured-services">
          <h1 className="text-4xl md:text-5xl">Featured Services</h1>
          <p>Choose a treatment and settle into an appointment that feels easy.</p>
          <div className="page-grid mt-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
    </div>
  )
}

export default Home
