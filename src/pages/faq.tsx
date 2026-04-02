import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';
import Container from '../components/Container';

const faqs = [
  {
    question: 'What is OpenSTR?',
    answer: 'OpenSTR is an open-source, self-hosted property management platform. It handles the operational side of running rental properties: guest communication, cleaning coordination, booking management, and the workflows that keep a property running between stays. You install it on your own infrastructure and own everything it produces.',
  },
  {
    question: 'Is it only for Airbnb?',
    answer: 'No. OpenSTR is platform-agnostic. It is designed to work with any booking channel — Airbnb, Vrbo, direct bookings, or any combination. The platform manages your operations, not your listings. You can connect it to the channels you already use.',
  },
  {
    question: 'Does it support long-term rentals?',
    answer: 'Yes. OpenSTR supports both short-term rentals and long-term leases. If you manage a mix of vacation rentals and residential tenants, you can run both from the same installation. The workflows are different, and OpenSTR handles both.',
  },
  {
    question: 'Is it free?',
    answer: 'Yes. OpenSTR is free and open source, released under the MIT license. There are no subscription fees, no per-property charges, and no premium tiers. You pay for the infrastructure you choose to run it on, which you control entirely.',
  },
  {
    question: 'Can I self-host it?',
    answer: 'Yes — that is the point. OpenSTR is designed to be self-hosted. You can run it on a VPS, a dedicated server, or a cloud provider of your choice. The documentation covers common deployment setups, and the community can help with questions. You do not need a dedicated IT team to get it running.',
  },
];

const FaqPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Page header */}
      <div className="bg-stone-50 border-b border-stone-100 py-20">
        <Container narrow>
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-stone-900 leading-tight">
            Common questions.
          </h1>
        </Container>
      </div>

      <Section>
        <Container narrow>
          <dl className="space-y-10">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="border-t border-stone-100 pt-8">
                <dt className="text-base font-semibold text-stone-900 mb-3">{question}</dt>
                <dd className="text-stone-600 leading-relaxed">{answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </Layout>
  );
};

export default FaqPage;

export const Head: HeadFC = () => (
  <Seo
    title="FAQ — OpenSTR"
    description="Answers to common questions about OpenSTR — what it is, who it is for, and how to get started."
    pathname="/faq"
  />
);
