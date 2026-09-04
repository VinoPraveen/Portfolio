import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#Home', label: 'Home' },
  { href: '#About', label: 'About' },
  { href: '#Skills', label: 'Skills' },
  { href: '#Projects', label: 'Projects' },
  { href: '#Experience', label: 'Experience' },
  { href: '#Education', label: 'Education' },
  { href: '#Contact', label: 'Contact' },
];

function Navbar() {
  const [active, setActive] = useState('#Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => { if (s) observer.observe(s); });
    return () => observer.disconnect();
  }, []);

  function handleClick() {
    setMobileOpen(false);
  }

  return (
    <nav role="navigation" aria-label="Main navigation">
      <button
        className={`hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={handleClick}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
