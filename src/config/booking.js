const DEFAULT_PRODUCTION_BOOKING_URL = 'https://peggybeautysalon.com';
const LOCAL_BOOKING_URL = 'http://localhost:4000';

export function getBookingUrl() {
  const configuredUrl = import.meta.env.VITE_BOOKING_URL;
  if (configuredUrl) return configuredUrl.replace(/\/$/, '');

  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return LOCAL_BOOKING_URL;
  }

  return DEFAULT_PRODUCTION_BOOKING_URL;
}

export function getServiceBookingUrl(serviceName) {
  const url = new URL(getBookingUrl());
  url.searchParams.set('service', serviceName);
  return url.toString();
}

const DEFAULT_BUSINESS_SLUG = 'peggy-beauty-salon-b47e63';

export function getBusinessSlug() {
  return import.meta.env.VITE_BUSINESS_SLUG || DEFAULT_BUSINESS_SLUG;
}

// The booking system's nginx only proxies the Express API under /api/ —
// everything else on that host falls through to the dashboard SPA. Any fetch
// to the booking API (as opposed to a plain link to the booking site itself)
// must go through this prefix.
export function getApiUrl() {
  return `${getBookingUrl()}/api`;
}
