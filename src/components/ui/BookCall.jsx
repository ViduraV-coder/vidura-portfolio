import { BOOK_CALL } from '../../data/site';

// link to the 15-minute call: the booking page in a new tab (data/site.js), or an email if none is set
export default function BookCall({ className, children, ...rest }) {
  const external = BOOK_CALL.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a className={className} href={BOOK_CALL.href} {...external} {...rest}>
      {children}
    </a>
  );
}
