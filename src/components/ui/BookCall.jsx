import { BOOK_CALL } from '../../data/site';

// A link to the 15-minute call. It goes to the booking page once VITE_BOOKING_URL is set (see
// data/site.js) and to a ready-written email until then.
export default function BookCall({ className, children, ...rest }) {
  const external = BOOK_CALL.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a className={className} href={BOOK_CALL.href} {...external} {...rest}>
      {children}
    </a>
  );
}
