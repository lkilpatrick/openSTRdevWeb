import React from 'react';
import Section from './Section';
import Container from './Container';

const GITHUB = 'https://github.com/lkilpatrick/openstr';

const pathways = [
  { label: 'Report issues', description: 'Found a bug? Open an issue.', href: `${GITHUB}/issues` },
  { label: 'Suggest workflows', description: 'Have an operations idea? Start a discussion.', href: `${GITHUB}/discussions` },
  { label: 'Contribute code', description: 'Browse issues and open a pull request.', href: `${GITHUB}/pulls` },
  { label: 'Improve docs', description: 'Fix a typo, expand a guide, write something new.', href: `${GITHUB}/tree/main/docs` },
];

const ContributorCta: React.FC = () => {
  return (
    <Section className="bg-stone-50">
      <Container>
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Get involved</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-stone-900 leading-snug">
            Built by people who use it.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {pathways.map(({ label, description, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group border-t border-stone-200 pt-6 block hover:border-stone-900 transition-colors">
              <h3 className="text-sm font-semibold text-stone-900 mb-2 group-hover:underline">{label}</h3>
              <p className="text-sm text-stone-500">{description}</p>
              <span className="mt-3 inline-block text-xs text-stone-400 group-hover:text-stone-900 transition-colors">GitHub ↗</span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ContributorCta;
