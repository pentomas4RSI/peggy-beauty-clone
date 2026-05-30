import React from 'react'
import { motion } from 'framer-motion'

function PageHero({ eyebrow, title, description, image = '/images/salon/peggy-portrait.png', showText = true }) {
  return (
    <section className="relative h-[56vh] md:h-[64vh] w-full overflow-hidden page-hero">
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center center' }}
        initial={{ x: -80, scale: 1.04 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

      {showText && (
        <div className="relative z-10 mx-auto h-full max-w-6xl px-6 text-white flex items-center">
          <div>
            {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
            <motion.h1 className="text-3xl md:text-5xl font-heading leading-tight" style={{ fontWeight: 900 }}>
              {title}
            </motion.h1>
            {description && <p className="mt-4 max-w-3xl text-base text-offwhite-cream/90">{description}</p>}
          </div>
        </div>
      )}
    </section>
  )
}

export default PageHero
