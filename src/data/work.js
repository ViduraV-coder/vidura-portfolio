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

// Layout on a wide screen: a 12-column grid, `span` is how many columns a card takes. Two cards share
// a row (7 + 5 or 5 + 7) or one card takes the whole row (12). Below ~970px the grid is one column.
export const PROJECTS = [
  {
    n: '01',
    slug: 'st-anthonys',
    title: "St. Anthony's Service",
    domain: 'stanthonysservice.lk',
    url: 'https://stanthonysservice.lk',
    desc: 'A multi-page Webflow site for a home and business repair company (CCTV, solar, AC, appliances), with service pages, an FAQ and online booking enquiries wired into GoHighLevel.',
    tags: ['Webflow', 'GoHighLevel', 'Custom JavaScript'],
    backdrop: IMG.workAnthony,
    backdropPosition: '62% 50%',
    span: 7,
    height: 620,
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
    desc: 'A Webflow build with enquiries routed into GoHighLevel and Supabase doing the data work behind the forms.',
    tags: ['Webflow', 'GoHighLevel', 'Supabase', 'Custom JavaScript'],
    backdrop: IMG.workPurehydro,
    backdropPosition: '72% 50%',
    span: 5,
    height: 620,
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
    desc: 'A multi-page Webflow site for a Colombo freight forwarder and customs broker, with a page for each service (road, sea, air, rail, multimodal, customs) and enquiries running through GoHighLevel, Supabase and Make.',
    tags: ['Webflow', 'GoHighLevel', 'Supabase', 'Make'],
    backdrop: IMG.workFletching,
    backdropPosition: '50% 50%',
    span: 5,
    height: 620,
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
    desc: 'A WordPress and WooCommerce store for a Colombo healthcare importer and the local agent for NOW Foods, with product categories, a cart and wishlist, a partners page and custom JavaScript on top.',
    tags: ['WordPress', 'WooCommerce', 'Custom JavaScript'],
    backdrop: IMG.workImedra,
    backdropPosition: '50% 50%',
    span: 7,
    height: 620,
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
    desc: 'A WordPress site about Bharatanatyam, the classical Indian dance form, with sections on theory and practice, a blog, learning resources and a photo gallery.',
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
    desc: 'A responsive site for a BBC Broadcasting House event on Power of Attorney abuse, with a full-day agenda plus speaker and breakout pages.',
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
