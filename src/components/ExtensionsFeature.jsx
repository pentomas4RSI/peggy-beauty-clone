import { Link } from 'react-router-dom'

function ExtensionsFeature() {
  return (
    <section className="mt-12 bg-[#F7E6E2]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-wide text-primary">Toronto's Expertise</p>

          <h2 className="mt-2 text-3xl md:text-4xl font-heading">Signature Hair Extensions</h2>

          <p className="mt-4 text-muted-text max-w-lg">
            Custom tape-in, keratin bond, and weft extensions designed to blend seamlessly with your natural hair. Peggy offers personalized consultations, precision colour-matching, and careful placement that prioritizes natural movement and long-term hair health.
          </p>

          <ul className="mt-6 space-y-2 list-inside list-disc text-muted-text max-w-md">
            <li>Personalized consultation and colour match</li>
            <li>Invisible placement for natural movement</li>
            <li>Maintenance, styling, and aftercare guidance</li>
          </ul>

          <Link to="/services" className="mt-6 inline-flex items-center rounded bg-primary px-6 py-2 text-sm font-semibold text-deep-black">
            View services
          </Link>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src="/images/salon/about-peggy.png" alt="Peggy" className="w-full max-w-md rounded-lg object-cover shadow-sm" />
        </div>
      </div>
    </section>
  )
}

export default ExtensionsFeature
