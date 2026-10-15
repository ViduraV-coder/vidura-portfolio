import { BOOK_CALL } from '../../data/site';

// A link to the 15-minute call. It opens the booking page in a new tab (see data/site.js), or a
// ready-written email if no booking page is set.
export default function BookCall({ className, children, ...rest }) {
  const external = BOOK_CALL.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a className={className} href={BOOK_CALL.href} {...external} {...rest}>
      {children}
    </a>
  );
}
