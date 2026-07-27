import { useEffect, useState } from 'react'
import { getBookingUrl, getApiUrl, getBusinessSlug } from '../config/booking'

const DAY_ORDER = [
  { key: 'mon', label: 'MONDAY' },
  { key: 'tue', label: 'TUESDAY' },
  { key: 'wed', label: 'WEDNESDAY' },
  { key: 'thu', label: 'THURSDAY' },
  { key: 'fri', label: 'FRIDAY' },
  { key: 'sat', label: 'SATURDAY' },
  { key: 'sun', label: 'SUNDAY' },
]

// Shown until the live hours load (and if the request fails) — matches the
// booking system's own defaults for a Mon-Fri salon.
const FALLBACK_HOURS = {
  mon: { enabled: true, open: '10:00', close: '18:00' },
  tue: { enabled: true, open: '10:00', close: '18:00' },
  wed: { enabled: true, open: '10:00', close: '18:00' },
  thu: { enabled: true, open: '10:00', close: '18:00' },
  fri: { enabled: true, open: '10:00', close: '18:00' },
  sat: { enabled: false, open: '09:00', close: '17:00' },
  sun: { enabled: false, open: '09:00', close: '17:00' },
}

function formatTime(hhmm) {
  const [hStr, mStr] = hhmm.split(':')
  let h = parseInt(hStr, 10)
  const m = parseInt(mStr, 10)
  const period = h >= 12 ? 'pm' : 'am'
  h = h % 12 || 12
  return m === 0 ? `${h}${period}` : `${h}:${String(m).padStart(2, '0')}${period}`
}

function VisitUsSection() {
  const today = null
  const [hours, setHours] = useState(FALLBACK_HOURS)

  useEffect(() => {
    let cancelled = false
    fetch(`${getApiUrl()}/b/${getBusinessSlug()}/hours`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.hours) setHours(data.hours)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const hoursList = DAY_ORDER.map(({ key, label }) => {
    const day = hours[key]
    return {
      dayKey: key,
      label,
      time: day?.enabled ? `${formatTime(day.open)}-${formatTime(day.close)}` : 'CLOSED',
    }
  })

  return (
    <>
      <section id="visit-us" className="w-full bg-[#F7E6E2]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <div className="flex items-center">
              <div className="w-full text-center md:text-left md:flex md:flex-col md:items-center md:justify-center md:min-h-[420px] space-y-6 md:space-y-10">
                <p className="text-sm md:text-base font-bold uppercase tracking-[0.22em] text-primary">VISIT US</p>
                <h2 className="opening-script text-5xl md:text-7xl">Opening Hours</h2>

                <a href={getBookingUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded border border-black px-6 py-3 text-lg md:text-xl text-deep-black font-semibold">BOOK YOUR CONSULTATION</a>
              </div>
            </div>

            <div className="pl-8">
              <div className="md:h-full md:flex md:items-center">
                <div className="border-l border-gray-300 h-full md:pl-8 flex items-center">
                  <div className="working-hours md:min-h-[420px] w-full">
                    <div className="brand-card w-full" style={{ padding: '1.5rem' }}>
                      <ul className="elementor-icon-list-items space-y-8 md:space-y-10">
                        {hoursList.map(({ dayKey, label, time }) => (
                          <li className="elementor-icon-list-item" key={dayKey}>
                            <span className={`elementor-icon-list-text ${dayKey === today ? 'font-semibold text-deep-black' : 'text-muted-text'}`}>
                              {label} - {time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VisitUsSection
