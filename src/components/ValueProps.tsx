import React from 'react';
import Section from './Section';
import Container from './Container';

const VALUE_PROPS = [
  { title: 'Airbnb iCal sync', description: 'Imports your booking calendar so cleaners always know what\'s coming.' },
  { title: 'Photo evidence', description: 'Before/after photos per room, required for every clean.' },
  { title: 'Supply alerts', description: 'Cleaners flag low stock inline. You see it on the dashboard.' },
  { title: 'Multi-property', description: 'Manage your STR, your home, and future properties from one place.' },
  { title: 'Network-aware mobile', description: 'Cleaners view schedules anywhere. Sessions only start on your WiFi.' },
  { title: 'GPL-3.0 open source', description: 'Free to use, modify, and deploy. No subscription, no vendor.' },
];

const ValueProps: React.FC = () => {
  return (
    <Section className="bg-stone-900">
      <Container>
        <div className="max-w-xl mb-10">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Features</p>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white">
            Everything a host needs. Nothing extra.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS.map(({ title, description }) => (
            <div key={title} className="border-t border-stone-700 pt-5">
              <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ValueProps;
