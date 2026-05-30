import React, { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'
import services from '../data/services'
import { useSearchParams } from 'react-router-dom'

function Contact() {
  const [searchParams] = useSearchParams()
  const prefillService = searchParams.get('service') || ''

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: prefillService,
    message: '',
  })

  const [status, setStatus] = useState(null)

  useEffect(() => {
    // page meta
    const prevTitle = document.title
    document.title = 'Book Appointment - Peggy Beauty'
    let meta = document.querySelector('meta[name="description"]')
    const desc = 'Request an appointment at Peggy Beauty — balayage, extensions, colour, and cuts. This form is a booking request; we will confirm availability.'
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = desc

    // JSON-LD (basic)
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'HairSalon',
      'name': 'Peggy Beauty',
      'url': window.location.origin,
      'telephone': '',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': '',
      },
      'description': desc,
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.className = 'contact-json-ld'
    script.text = JSON.stringify(ld)
    document.head.appendChild(script)

    return () => {
      document.title = prevTitle
      if (script && script.parentNode) script.parentNode.removeChild(script)
      // leave meta as-is (don't remove) to avoid clobbering other pages
    }
  }, [])

  useEffect(() => {
    // if URL prefill changes, update form.service
    if (prefillService) setForm((s) => ({ ...s, service: prefillService }))
  }, [prefillService])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // This is a client-side stub. Replace with real submission (API / email) if available.
    setTimeout(() => {
      console.log('Booking request', form)
      setStatus('sent')
    }, 700)
  }

  return (
    <div>
      <PageHero
        image="/images/salon/salon-banner.png"
        showText={false}
      />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-2xl font-heading">Appointment Policies</h2>
            <ul className="mb-6 list-inside list-disc space-y-2 text-sm text-muted-text">
              <li>Contact form is a request only — we will contact you to confirm.</li>
              <li>Deposits are required for larger colouring &amp; extension services.</li>
              <li>Please provide 24+ hours notice for cancellations or rescheduling.</li>
              <li>Arriving more than 15 minutes late may result in rescheduling.</li>
            </ul>

            <div className="prose max-w-none">
              <p>
                For pricing details, visit the Pricing page. If you need help selecting a service, choose the closest match and our team will follow up.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.instagram.com/peggybeauty.salon" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-text">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M7.75 2h8.5C19.097 2 21 3.903 21 6.25v11.5C21 20.097 19.097 22 16.25 22h-8.5C4.903 22 3 20.097 3 17.75V6.25C3 3.903 4.903 2 7.75 2zm4.25 5.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25-.75a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" />
                  <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" fill="#fff" opacity="0" />
                </svg>
                <span>@peggybeauty.salon</span>
              </a>

              <a href="mailto:peggybeauty.info@gmail.com" className="flex items-center gap-2 text-sm text-muted-text">
                <svg width="18" height="14" viewBox="0 0 24 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v9A2.5 2.5 0 0 1 19.5 16H4.5A2.5 2.5 0 0 1 2 13.5v-9zM4.5 4L12 8.5 19.5 4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>peggybeauty.info@gmail.com</span>
              </a>

              <a href="https://www.facebook.com/share/1BXrvBoe1u/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-text">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H8.2v-2.88h2.06V9.49c0-2.03 1.2-3.15 3.03-3.15.88 0 1.8.16 1.8.16v2h-1.03c-1.02 0-1.33.63-1.33 1.28v1.55h2.26l-.36 2.88h-1.9v6.99c4.78-.75 8.44-4.89 8.44-9.88z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="rounded border p-6 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="grid gap-3 md:grid-cols-2">
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="rounded border px-3 py-2" />
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="rounded border px-3 py-2" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email*" type="email" required className="rounded border px-3 py-2" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded border px-3 py-2" />
              <input name="date" value={form.date} onChange={handleChange} placeholder="Preferred date" type="date" className="rounded border px-3 py-2" />
              <input name="time" value={form.time} onChange={handleChange} placeholder="Preferred time" type="time" className="rounded border px-3 py-2" />
            </div>

            <label className="mt-3 block text-sm font-medium">I'm interested in</label>
            <select name="service" value={form.service} onChange={handleChange} className="mt-2 w-full rounded border px-3 py-2">
              <option value="">— Please choose an option —</option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>

            <label className="mt-3 block text-sm font-medium">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="mt-2 w-full rounded border px-3 py-2" placeholder="Any additional details" />

            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center rounded bg-primary px-4 py-2 text-deep-black font-semibold">
                {status === 'sending' ? 'Sending…' : 'Submit Request'}
              </button>
              {status === 'sent' && <span className="text-sm text-muted-text">Request sent — we will contact you shortly.</span>}
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default Contact
