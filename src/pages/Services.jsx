import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import servicesData from '../data/services'
import PageHero from '../components/PageHero'

const services = [
  {
    title: 'Signature Hair Extensions',
    description:
      'Custom tape-in, keratin bond, and weft extensions designed to blend seamlessly with your natural hair.',
    features: [
      'Personalized consultation and color match',
      'Invisible placement for natural movement',
      'Maintenance, styling, and aftercare guidance',
    ],
  },
  {
    title: 'Balayage & Blonde Services',
    description:
      'Soft, dimensional balayage and bright blonde services crafted for effortless grow-out and healthy-looking dimension.',
    features: [
      'Hand-painted balayage and root smudge',
      'Blonde toning, glossing, and refresh',
      'Custom colour plans for low-maintenance wear',
    ],
  },
  {
    title: 'Full Colour & Correction',
    description:
      'Precision colour, retouch, and correction services that restore balance while protecting hair integrity.',
    features: [
      'Root touch-ups and all-over colour',
      'Correction for fading, brassiness, and uneven tone',
      'Healthy hair care with bond-building treatments',
    ],
  },
  {
    title: 'Haircut & Styling',
    description:
      'Luxury haircut, blowout, and styling services tailored to your texture, lifestyle, and event needs.',
    features: [
      'Consultation-based precision cuts',
      'Shaping, layering, and long-hair maintenance',
      'Special occasion styling and finishing',
    ],
  },
  {
    title: 'Repair & Treatment Rituals',
    description:
      'Restorative hair treatments designed to strengthen, hydrate, and add shine from root to tip.',
    features: [
      'Deep conditioning and bond repair',
      'Scalp care and hydration therapies',
      'Luxury treatment packages for healthier texture',
    ],
  },
  {
    title: 'Bridal & Event Beauty',
    description:
      'Effortless bridal styling, trial sessions, and polished event looks for your most meaningful moments.',
    features: [
      'Consultation and trial styling',
      'On-site bridal hair support',
      'Long-lasting finish for wedding day and events',
    ],
  },
]

const brandLogos = [
  { src: '/images/logo.png', alt: 'Peggy Beauty' },
  { src: '/images/brands/oribe.jpg', alt: 'ORIBE' },
  { src: '/images/brands/loreal.jpg', alt: 'L\'Oreal' },
  { src: '/images/brands/bellami.jpg', alt: 'Bellami' },
  { src: '/images/brands/haircare.jpg', alt: 'Luxury Hair Care' },
]

function Services() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const pricing = [
    { title: 'Haircut — Women', price: '$95+', duration: '60–90 min' },
    { title: 'Haircut — Men', price: '$55+', duration: '30–45 min' },
    { title: 'Blowout & Style', price: '$45+', duration: '30–60 min' },
  ]

  const faqs = [
    { q: 'Do I need a consultation?', a: 'For new clients we recommend a consultation to discuss goals and assess hair health.' },
    { q: 'How long do appointments take?', a: 'Appointment length varies by service; colour and extensions can take multiple hours.' },
  ]

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Peggy Beauty Service Menu"
        image="/images/salon/salon-banner.png"
        showText={false}
      />

      <motion.div className="mt-8 mx-auto w-full px-4" variants={fadeIn}>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-100 bg-white/80 p-6 md:p-8 shadow-sm">
          <p className="text-base md:text-lg leading-8 text-muted-text max-w-3xl mx-auto">
            Peggy Beauty offers a curated range of services tailored to your unique hair goals — from precision haircuts and bespoke colour to hand-painted balayage and luxury extensions. Each service includes a personalized consultation, a custom colour or extension plan, and aftercare guidance so your results stay vibrant and healthy.
          </p>
        </div>
      </motion.div>

      <motion.section className="page" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} variants={container}>

        <motion.div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm" variants={fadeIn}>
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary">Trusted partners</p>
              <p className="mt-2 text-muted-text max-w-2xl">
                We work with premium brands and salon partners to deliver safer, more consistent hair extensions, colour, and finish services.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-semibold text-deep-black">
              Book a consultation
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {brandLogos.map((brand) => (
              <div key={brand.alt} className="flex items-center justify-center rounded-xl bg-white p-3 shadow-sm">
                <img src={brand.src} alt={brand.alt} className="max-h-12 md:max-h-16 object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-10 page-grid">
          {servicesData
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
        </motion.div>

        {/* Starting prices removed per request */}

        {/* Pricing moved to the dedicated Pricing page */}

        <motion.section className="mt-12 max-w-3xl" variants={fadeIn}>
          <h3 className="text-2xl font-heading">Frequently asked</h3>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border p-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-text">{f.a}</p>
              </details>
            ))}
          </div>
        </motion.section>
      </motion.section>
    </>
  )
}

export default Services
