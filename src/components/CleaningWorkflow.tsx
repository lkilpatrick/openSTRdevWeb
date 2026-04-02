import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Section from './Section';
import Container from './Container';

const stages = [
  { label: 'Before', description: 'Guests check out. The property needs attention.' },
  { label: 'Process', description: 'Your team gets the task. OpenSTR coordinates the workflow.' },
  { label: 'Ready', description: 'The property is guest-ready. Every time.' },
];

const CleaningWorkflow: React.FC = () => {
  return (
    <Section className="bg-stone-50">
      <Container>
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Operations</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-stone-900 leading-snug">
            From checkout to guest-ready, without the chaos.
          </h2>
        </div>

        {/* Stage labels */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stages.map(({ label, description }, i) => (
            <div key={label}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-stone-400">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-semibold text-stone-900">{label}</span>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Before / After images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="overflow-hidden">
            <div className="relative">
              <StaticImage
                src="../images/Cleaningb4.png"
                alt="Rental property room before cleaning — unmade bed, used towels"
                layout="fullWidth"
                objectFit="cover"
                objectPosition="center"
                placeholder="blurred"
                quality={85}
                className="w-full aspect-[4/3]"
              />
              <span className="absolute bottom-4 left-4 text-xs font-medium text-white bg-black/50 px-2 py-1 tracking-wide uppercase">
                Before
              </span>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="relative">
              <StaticImage
                src="../images/cleaningafter.png"
                alt="Rental property room after cleaning — fresh linens, tidy space"
                layout="fullWidth"
                objectFit="cover"
                objectPosition="center"
                placeholder="blurred"
                quality={85}
                className="w-full aspect-[4/3]"
              />
              <span className="absolute bottom-4 left-4 text-xs font-medium text-white bg-black/50 px-2 py-1 tracking-wide uppercase">
                Ready
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CleaningWorkflow;
