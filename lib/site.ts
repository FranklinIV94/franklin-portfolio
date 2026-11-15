/**
 * One place for the facts that identify this site and the way to reach Franklin.
 *
 * Added for the WebMCP layer: a browser agent asking for contact details must get the
 * same phone number, email and booking path a human reads on /contact and in the footer.
 * The footer and /contact now render from these constants, so the tool cannot drift from
 * the page — edit the number here and the page, the footer and the tool all move together.
 */
export const SITE = {
  name: 'Franklin J Bryant IV',
  shortName: 'Franklin Bryant',
  url: 'https://franklin.simplifyingbusinesses.com',
  locale: 'Florida, remote across 5 states',
} as const;

export const CONTACT = {
  /** Published on /contact ("If it is urgent, call …") and in the footer. */
  phone: '(561) 589-8900',
  phoneHref: 'tel:+15615898900',
  /** Published in the site footer on every page. */
  email: 'franklin@prospyr305.com',
  form: '/contact',
  booking: '/book',
} as const;

export const PATHS = {
  home: '/',
  about: '/about',
  work: '/work',
  writing: '/writing',
  blog: '/blog',
  fieldNotes: '/field-notes',
  showcase: '/showcase',
  rss: '/rss.xml',
} as const;
