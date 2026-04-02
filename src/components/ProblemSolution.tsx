import React from 'react';
import Section from './Section';
import Container from './Container';

const problems = [
  { title: 'Fragmented tools', body: 'Calendars in one app, messaging in another, financials somewhere else. Nothing talks to anything.' },
  { title: 'Manual coordination', body: 'Cleaning schedules, check-in instructions, maintenance requests — all handled by hand, every time.' },
  { title: 'Inflexible systems', body: 'Off-the-shelf platforms force you into their workflows. Your operation has to bend to fit their product.' },
  { title: 'Vendor lock-in', body: 'Your data, your listings, your guest history — all held hostage by a subscription you can never leave.' },
];

const solutions = [
  { title: 'Self-hosted', body: 'Run OpenSTR on your own server. Your infrastructure, your rules, your data.' },
  { title: 'Open source', body: 'Every line of code is public. Audit it, fork it, extend it. No black boxes.' },
  { title: 'Customizable', body: 'Build the workflows that match how you actually operate, not how a product manager imagined you do.' },
  { title: 'STR and long-term', body: 'Manage short-term vacation rentals and long-term leases from a single platform.' },
];

const ProblemSolution: React.FC = () => {
  return (
    <>
      {/* Problem */}
      <Section className="bg-stone-50">
        <Container>
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The problem</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-stone-900 leading-snug">
              Property management software was not built for operators.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {problems.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-base font-semibold text-stone-900 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The solution</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-stone-900 leading-snug">
              Software you own, built for the way you work.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {solutions.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-base font-semibold text-stone-900 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ProblemSolution;
