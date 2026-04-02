import React from 'react';
import Section from './Section';
import Container from './Container';

const VALUE_PROPS = [
  { title: 'Hosted by you', description: 'Run OpenSTR on your own infrastructure. Your data stays yours, always.' },
  { title: 'Free and open source', description: 'No licensing fees. No vendor agreements. Fork it, own it, ship it.' },
  { title: 'Custom workflows', description: 'Build the operations process that fits your properties, not a template.' },
  { title: 'Built for operators', description: 'Designed around how real property managers actually work, day to day.' },
  { title: 'Short + long-term rentals', description: 'Manage STR and LTR properties from a single, unified platform.' },
  { title: 'Contributor-friendly', description: 'Clear paths for developers, operators, and writers to improve the project.' },
];

const ValueProps: React.FC = () => {
  return (
    <Section className="bg-stone-900">
      <Container>
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Why OpenSTR</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white leading-snug">
            Everything you need. Nothing you don't.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPS.map(({ title, description }) => (
            <div key={title} className="border-t border-stone-700 pt-6">
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ValueProps;
