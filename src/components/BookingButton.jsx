import { Link } from 'react-router-dom'

function BookingButton() {
  return (
    <Link to="/contact" className="inline-flex items-center rounded bg-primary px-4 py-2 text-sm font-semibold text-deep-black">Book Now</Link>
  )
}

export default BookingButton
