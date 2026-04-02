import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';
import Container from '../components/Container';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Page header */}
      <div className="bg-stone-50 border-b border-stone-100 py-20">
        <Container narrow>
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-stone-900 leading-tight">
            What is OpenSTR?
          </h1>
        </Container>
      </div>

      {/* What it is */}
      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">A platform for property operators</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            OpenSTR is an open-source, self-hosted property management platform. It handles the operational side of running rental properties: guest communication, cleaning coordination, booking management, and the workflows that keep a property running smoothly between stays.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Unlike commercial platforms, OpenSTR runs on your own infrastructure. You install it, you configure it, and you own everything it produces. There is no subscription, no vendor, and no data leaving your control.
          </p>
        </Container>
      </Section>

      {/* Who it is for */}
      <Section className="bg-stone-50">
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Who it is for</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            OpenSTR is built for property operators who manage short-term rentals, long-term leases, or a mix of both. If you run one property or a hundred, the core problem is the same: too many tools, too much manual work, and too little control over your own operation.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            It is also for developers who want to contribute to a real-world operations platform, and for operators who want to shape the software they depend on.
          </p>
          <ul className="space-y-2 text-stone-600">
            <li className="flex gap-2"><span className="text-stone-300">—</span> Short-term rental hosts and managers</li>
            <li className="flex gap-2"><span className="text-stone-300">—</span> Long-term residential landlords</li>
            <li className="flex gap-2"><span className="text-stone-300">—</span> Mixed-portfolio operators</li>
            <li className="flex gap-2"><span className="text-stone-300">—</span> Developers building on top of property data</li>
          </ul>
        </Container>
      </Section>

      {/* Why it exists */}
      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Why it exists</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The property management software market is full of platforms that charge high fees, lock your data behind proprietary APIs, and build features for their investors rather than their users.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            OpenSTR exists because operators deserve better. The tools you use to run your business should be transparent, extensible, and owned by you. Open source is not just a licensing choice — it is a statement about who the software is for.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The project is maintained by contributors who manage properties themselves. The roadmap is shaped by real operational needs, not by what looks good in a pitch deck.
          </p>
        </Container>
      </Section>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <Seo
    title="About OpenSTR"
    description="Learn what OpenSTR is, who it is for, and why it exists as an open-source property management platform."
    pathname="/about"
  />
);
