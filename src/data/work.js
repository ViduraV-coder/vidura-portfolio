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
    flex: '7 1 560px',
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
    flex: '5 1 380px',
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
    backdropPosition: '50% 62%',
    flex: '1 1 100%',
    height: 540,
    wide: true,
    flip: true, // frame on the left, text on the right
    wire: ['#4FA8E8', '#1A3E8C'],
    screenshot: shot('fletching'),
  },
  {
    n: '04',
    slug: 'willpower',
    title: 'WillPower Alliance',
    domain: 'willpoweralliance.co.uk',
    url: 'https://willpoweralliance.co.uk',
    desc: 'A responsive site for a BBC Broadcasting House event on Power of Attorney abuse, with a full-day agenda plus speaker and breakout pages.',
    tags: ['Framer', 'Custom React components'],
    backdrop: IMG.workWillpower,
    backdropPosition: '50% 100%',
    flex: '1 1 100%',
    height: 540,
    wide: true,
    wire: ['#9A6CE0', '#4A2C9E'],
    screenshot: shot('willpower'),
  },
];
