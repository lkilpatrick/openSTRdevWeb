import React from 'react';
import { Link } from 'gatsby';

const GITHUB = 'https://github.com/lkilpatrick/openstr';
import Section from './Section';
import Container from './Container';

const arguments_ = [
  { title: 'Control your system', body: 'No third party sits between you and your data. You decide what runs, where it runs, and who can access it.' },
  { title: 'No lock-in', body: 'Your guest history, your listings, your workflows — they belong to you. Export them, migrate them, or keep them forever.' },
  { title: 'Flexible workflows', body: 'OpenSTR adapts to your operation. Build the automations and processes that match how your team actually works.' },
  { title: 'Open source', body: 'Every line of code is public. Audit it, extend it, or contribute back. The project belongs to the community.' },
];

const WhyOpenstrTeaser: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The case for ownership</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-stone-900 leading-snug mb-6">
              Your property. Your software. Your rules.
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              Most property management platforms are built to keep you dependent. OpenSTR is built on the opposite principle: you should own your tools the same way you own your properties.
            </p>
            <Link
              to="/why-openstr"
              className="text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors"
            >
              Read the full case for OpenSTR
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {arguments_.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-stone-900 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyOpenstrTeaser;
