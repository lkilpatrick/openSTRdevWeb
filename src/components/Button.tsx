import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

const BASE = 'inline-block px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const VARIANTS = {
  primary: 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-white',
  secondary: 'border border-white text-white hover:bg-white hover:text-gray-900 focus-visible:ring-white',
};

const Button: React.FC<ButtonProps> = ({ variant, href, onClick, children, external = false, className = '' }) => {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
