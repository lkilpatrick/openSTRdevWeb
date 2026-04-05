import React, { useState } from 'react';
import { Link } from 'gatsby';

const GITHUB = 'https://github.com/lkilpatrick/openstr';

const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Why OpenSTR', path: '/why-openstr' },
  { label: 'Contribute', path: '/contribute' },
  { label: 'FAQ', path: '/faq' },
];

const EXTERNAL_LINKS = [
  { label: 'Docs', href: 'https://openstr.dev/docs/' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-stone-900 hover:text-stone-600 transition-colors">
          OpenSTR
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={path} to={path} className="text-sm text-stone-600 hover:text-stone-900 transition-colors" activeClassName="text-stone-900 font-medium">
              {label}
            </Link>
          ))}
          {EXTERNAL_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
              {label}
            </a>
          ))}
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-1.5 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors rounded-sm">
            GitHub
          </a>
        </nav>

        <button className="md:hidden text-stone-700 hover:text-stone-900 transition-colors p-1" onClick={() => setMenuOpen(p => !p)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-stone-100 bg-white px-6 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={path} to={path} className="text-sm text-stone-600 hover:text-stone-900 transition-colors" activeClassName="text-stone-900 font-medium" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          {EXTERNAL_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
              {label}
            </a>
          ))}
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            GitHub ↗
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
