import React from 'react';
import Section from './Section';
import Container from './Container';

const pathways = [
  {
    label: 'Report issues',
    description: 'Found a bug or unexpected behavior? Open an issue on GitHub.',
    href: 'https://github.com/openstr/openstr/issues',
  },
  {
    label: 'Suggest workflows',
    description: 'Have an idea for a new automation or operations pattern? Start a discussion.',
    href: 'https://github.com/openstr/openstr/discussions',
  },
  {
    label: 'Contribute code',
    description: 'Browse open issues, pick something that interests you, and open a pull request.',
    href: 'https://github.com/openstr/openstr/pulls',
  },
  {
    label: 'Improve docs',
    description: 'Clear documentation helps everyone. Fix a typo, expand a guide, or write something new.',
    href: 'https://github.com/openstr/openstr/tree/main/docs',
  },
];

const ContributorCta: React.FC = () => {
  return (
    <Section className="bg-stone-50">
      <Container>
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Get involved</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-stone-900 leading-snug">
            OpenSTR is built by people who use it.
          </h2>
          <p className="mt-4 text-stone-500 leading-relaxed">
            Whether you manage properties, write code, or just have opinions about software — there is a way to contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {pathways.map(({ label, description, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-t border-stone-200 pt-6 block hover:border-stone-900 transition-colors"
            >
              <h3 className="text-sm font-semibold text-stone-900 mb-2 group-hover:underline">{label}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
              <span className="mt-3 inline-block text-xs text-stone-400 group-hover:text-stone-900 transition-colors">
                GitHub ↗
              </span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ContributorCta;
