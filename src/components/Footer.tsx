import React from 'react';
import { Link } from 'gatsby';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Why OpenSTR', path: '/why-openstr' },
  { label: 'Contribute', path: '/contribute' },
  { label: 'FAQ', path: '/faq' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stone-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-base font-semibold tracking-tight text-stone-900">OpenSTR</span>
          <p className="text-sm text-stone-500 max-w-xs">
            Open-source, self-hosted rental property management for operators who want control.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/openstr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
      <div className="border-t border-stone-100 py-4 text-center text-xs text-stone-400">
        OpenSTR is open-source software released under the MIT license.
      </div>
    </footer>
  );
};

export default Footer;
