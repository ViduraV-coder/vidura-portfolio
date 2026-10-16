import { useEffect, useRef, useState } from 'react';
import { NAV, NAV_CTA, SITE } from '../data/site';

export default function Nav() {
  const menu = useRef(null);
  const [open, setOpen] = useState(false);

  // mobile menu is a <details> so it opens without js, this only closes it on Escape or an outside tap
  useEffect(() => {
    const el = menu.current;
    if (!el) return undefined;
    const close = () => {
      el.open = false;
    };
    const onPointerDown = (event) => {
      if (el.open && !el.contains(event.target)) close();
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && el.open) {
        close();
        el.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const closeMenu = () => {
    if (menu.current) menu.current.open = false;
  };

  return (
    <nav
      className="absolute top-6 left-[5%] z-[6] flex items-center justify-between gap-x-[26px] gap-y-2 rounded-full border border-white/16 bg-[rgba(10,14,40,0.58)] py-[9px] pr-[9px] pl-[22px] shadow-[0_14px_40px_-18px_rgba(0,0,0,0.8)] backdrop-blur-[14px] max-tab:top-4 max-tab:right-4 max-tab:left-4 max-ph:top-3 max-ph:right-3 max-ph:left-3 max-ph:flex-nowrap max-ph:py-1.5 max-ph:pr-1.5 max-ph:pl-4"
      aria-label="Main"
    >
      {/* logo text is ~22px tall so it gets padding for a proper tap target and a negative margin to cancel it out.
          same on the links below */}
      <a
        className="-my-[11px] flex items-center gap-2.5 py-[11px] font-display text-[20px] font-semibold text-cream max-ph:text-[17px] max-ph:whitespace-nowrap"
        href="#top"
      >
        {/* a cat's head with the initials on its face, the same drawing as public/favicon.svg */}
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M3.4 13.2 6.6 3.4 13.6 8Q16 7.3 18.4 8L25.4 3.4 28.6 13.2Q30 16.5 30 20.4 30 28.8 16 28.8 2 28.8 2 20.4 2 16.5 3.4 13.2Z"
            fill="#ffb547"
            stroke="#ffb547"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path d="M6.9 9.2 7.3 6.4 10 8.1zM25.1 9.2 24.7 6.4 22 8.1z" fill="#ffe2a8" />
          <g stroke="#1a1740" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7.4 15.4 11 23.4 14.6 15.4" />
            <path d="M24.9 17.4A4.4 4.4 0 1 0 25.3 20.2H21" />
          </g>
        </svg>
        {SITE.name}
      </a>

      <div className="flex items-center gap-6 max-tab:hidden">
        {NAV.map((link) => (
          <a
            key={link.href}
            className="-mx-2 -my-3 px-2 py-3 text-[15px] font-medium text-cream"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        className="rounded-full bg-accent px-5 py-[11px] text-[15px] font-bold text-ink max-tab:hidden"
        href={NAV_CTA.href}
      >
        {NAV_CTA.label}
      </a>

      {/* phone / tablet menu, plain <details> */}
      <details
        className="group relative hidden max-tab:block"
        ref={menu}
        onToggle={(event) => setOpen(event.currentTarget.open)}
      >
        <summary
          className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full bg-accent [&::-webkit-details-marker]:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="relative h-0.5 w-[18px] rounded-[2px] bg-ink transition-colors duration-200 group-open:bg-transparent before:absolute before:top-[-6px] before:left-0 before:h-0.5 before:w-[18px] before:rounded-[2px] before:bg-ink before:transition-transform before:duration-[250ms] before:ease-[ease] before:content-[''] group-open:before:translate-y-1.5 group-open:before:rotate-45 after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-[18px] after:rounded-[2px] after:bg-ink after:transition-transform after:duration-[250ms] after:ease-[ease] after:content-[''] group-open:after:-translate-y-1.5 group-open:after:-rotate-45" />
        </summary>
        <div className="absolute top-[calc(100%+14px)] right-0 flex min-w-[230px] flex-col gap-0.5 rounded-3xl border border-white/16 bg-[rgba(10,14,40,0.94)] p-2.5 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-[18px]">
          {NAV.map((link) => (
            <a
              key={link.href}
              className="rounded-2xl px-4 py-[13px] text-[17px] font-semibold text-cream hover:bg-white/8 active:bg-white/8"
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-1.5 rounded-2xl bg-accent px-4 py-[13px] text-center text-[17px] font-semibold text-ink hover:bg-accent active:bg-accent"
            href={NAV_CTA.href}
            onClick={closeMenu}
          >
            {NAV_CTA.label}
          </a>
        </div>
      </details>
    </nav>
  );
}
