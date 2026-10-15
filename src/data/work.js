import { IMG } from '../assets';

// Screenshots: put a picture of each site in src/assets/shots/, named after the project's slug
// (st-anthonys.webp, purehydro.png, ...). It replaces the wireframe, no other change needed.
// Use the whole home page as one tall picture: on hover the card scrolls through it, top to bottom.
const shots = import.meta.glob('../assets/shots/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});
const shot = (slug) => {
  const match = Object.entries(shots).find(([path]) => path.includes(`/${slug}.`));
  return match ? match[1] : null;
};

// Each project can also carry:
//   delivered  a few short things that were built, shown under the description
//   result     a real figure the client has confirmed, e.g. 'Enquiries up 40% in 3 months'.
//              Leave it out until there is one: nothing is shown without it, and the card
//              adds a "Result" line by itself once it is filled in.
// Layout on a wide screen: a 12-column grid, `span` is how many columns a card takes. Two cards share
// a row (7 + 5 or 5 + 7) or one card takes the whole row (12). Below ~970px the grid is one column.
export const PROJECTS = [
  {
    n: '01',
    slug: 'st-anthonys',
    title: "St. Anthony's Service",
    domain: 'stanthonysservice.lk',
    url: 'https://stanthonysservice.lk',
    desc: 'A multi-page Webflow site for a home and business repair company: CCTV, solar, AC and appliances.',
    delivered: [
      'Service pages and an FAQ',
      'WhatsApp and online booking enquiries',
      'Leads wired into GoHighLevel',
    ],
    result: null,
    tags: ['Webflow', 'GoHighLevel', 'Custom JavaScript'],
    backdrop: IMG.workAnthony,
    backdropPosition: '62% 50%',
    span: 7,
    height: 680,
    wide: false,
    wire: ['#FFB070', '#E0577A'],
    screenshot: shot('st-anthonys'),
  },
  {
    n: '02',
    slug: 'purehydro',
    title: 'Purehydro',
    domain: 'purehydro.lk',
    url: 'https://purehydro.lk',
    desc: 'A Webflow site with the enquiry and data plumbing taken care of behind the forms.',
    delivered: [
      'Responsive Webflow build',
      'Enquiries routed into the CRM',
      'Data handling on Supabase',
    ],
    result: null,
    tags: ['Webflow', 'GoHighLevel', 'Supabase', 'Custom JavaScript'],
    backdrop: IMG.workPurehydro,
    backdropPosition: '72% 50%',
    span: 5,
    height: 680,
    wide: false,
    wire: ['#3FC2B6', '#1B6C86'],
    screenshot: shot('purehydro'),
  },
  {
    n: '03',
    slug: 'fletching',
    title: 'Fletching Logistics',
    domain: 'fletching.co',
    url: 'https://fletching.co',
    desc: 'A multi-page Webflow site for a Colombo freight forwarder and customs broker.',
    delivered: [
      'A page for each of 6 services',
      'Shipment tracking and quote forms',
      'Lead routing across 3 tools',
    ],
    result: null,
    tags: ['Webflow', 'GoHighLevel', 'Supabase', 'Make'],
    backdrop: IMG.workFletching,
    backdropPosition: '50% 50%',
    span: 5,
    height: 680,
    wide: false,
    wire: ['#4FA8E8', '#1A3E8C'],
    screenshot: shot('fletching'),
  },
  {
    n: '04',
    slug: 'imedra',
    title: 'Imedra Healthcare',
    domain: 'imedra.lk',
    url: 'https://imedra.lk',
    desc: 'A WordPress and WooCommerce store for a Colombo healthcare importer and the local agent for NOW Foods.',
    delivered: [
      'Product categories, cart and wishlist',
      'A partners page',
      'Custom JavaScript on WooCommerce',
    ],
    result: null,
    tags: ['WordPress', 'WooCommerce', 'Custom JavaScript'],
    backdrop: IMG.workImedra,
    backdropPosition: '50% 50%',
    span: 7,
    height: 680,
    wide: false,
    wire: ['#8E5BD0', '#4B2A86'],
    screenshot: shot('imedra'),
  },
  {
    n: '05',
    slug: 'natyadarshitha',
    title: 'Natyadarshitha',
    domain: 'natyadarshitha.com',
    url: 'https://natyadarshitha.com',
    desc: 'A WordPress site about Bharatanatyam, the classical Indian dance form.',
    delivered: ['Theory and practice sections', 'Blog and learning resources', 'Photo gallery'],
    result: null,
    tags: ['WordPress'],
    backdrop: IMG.workNatya,
    backdropPosition: '50% 100%', // the dancer and the rangoli are at the bottom of the painting
    span: 12,
    height: 540,
    wide: true,
    flip: true, // frame on the left, text on the right
    wire: ['#F0A04B', '#8A2C4C'],
    screenshot: shot('natyadarshitha'),
  },
  {
    n: '06',
    slug: 'willpower',
    title: 'WillPower Alliance',
    domain: 'willpoweralliance.co.uk',
    url: 'https://willpoweralliance.co.uk',
    desc: 'A responsive site for a BBC Broadcasting House event on Power of Attorney abuse.',
    delivered: [
      'Live countdown to the event',
      'Full-day agenda, speaker and breakout pages',
      'Free ticket booking form',
    ],
    result: null,
    tags: ['Framer', 'Custom React components'],
    backdrop: IMG.workWillpower,
    backdropPosition: '50% 100%',
    span: 12,
    height: 540,
    wide: true,
    wire: ['#9A6CE0', '#4A2C9E'],
    screenshot: shot('willpower'),
  },
];
