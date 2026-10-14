import { useEffect, useRef } from 'react';
import { NAV, NAV_CTA, SITE } from '../data/site';

export default function Nav() {
  const menu = useRef(null);

  // The mobile menu is a <details>, so it opens without any JS. This only closes it again
  // on Escape or a tap outside (clicking a link is handled below).
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
    <nav className="heroNav" aria-label="Main">
      <a className="navBrand" href="#top">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" fill="#FFB547" />
        </svg>
        {SITE.name}
      </a>

      <div className="heroLinks">
        {NAV.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <a className="navCta" href={NAV_CTA.href}>
        {NAV_CTA.label}
      </a>

      <details className="navMenu" ref={menu}>
        <summary aria-label="Open menu">
          <span className="bars" />
        </summary>
        <div className="navPanel">
          {NAV.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="cta" href={NAV_CTA.href} onClick={closeMenu}>
            {NAV_CTA.label}
          </a>
        </div>
      </details>
    </nav>
  );
}
