import BookingButton from '../components/BookingButton'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pricingItems = [
  { name: 'Consultation', from: 5, note: 'Initial assessment' },
  { name: 'Blowout & Style', from: 15, note: 'Quick styling' },
  { name: 'Haircut — Women', from: 25, note: 'Precision cutting' },
  { name: 'Haircut — Men', from: 12, note: 'Short haircuts' },
  { name: 'Balayage', from: 120, note: 'Hand-painted highlights' },
  { name: 'Extensions (install)', from: 80, note: 'Tape-in / keratin' },
]

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Pricing() {
  return (
    <section className="page">
      <h1 className="text-3xl font-heading">Pricing</h1>
      <p className="mt-2 text-muted-text">Starting prices are listed below. Final pricing depends on service details and consultation.</p>

      <motion.div className="mt-6 grid gap-6 md:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {pricingItems.map((p) => (
          <motion.article key={p.name} variants={fadeIn} className="rounded-2xl border bg-white p-8 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold">{p.name}</h2>
                <p className="mt-3 text-lg text-muted-text">{p.note}</p>
              </div>

              <div className="flex flex-col items-end gap-4">
                <div className="text-sm text-muted-text">Starts from</div>
                <div className="text-3xl md:text-4xl font-bold">${p.from}</div>
                <Link to={`/contact?service=${encodeURIComponent(p.name)}`} className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm md:text-base font-semibold text-deep-black">
                  Book Now
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-6"><BookingButton /></div>
    </section>
  )
}

export default Pricing
