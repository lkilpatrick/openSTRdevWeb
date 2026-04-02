import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';
import Container from '../components/Container';

const faqs = [
  {
    question: 'What is OpenSTR?',
    answer: 'A self-hosted, open-source cleaning management system for short-term rental hosts. It handles scheduling, room checklists, photo evidence, supply tracking, and cleaner coordination — all from your own server.',
  },
  {
    question: 'Is it only for Airbnb?',
    answer: 'Built for Airbnb hosts, but it works with any STR platform. It imports your booking calendar via iCal, so any platform that exports iCal (Vrbo, direct bookings, etc.) works.',
  },
  {
    question: 'Does it support long-term rentals?',
    answer: 'OpenSTR is focused on short-term rental operations. The cleaning workflow, iCal scheduling, and photo evidence system are built around STR turnovers.',
  },
  {
    question: 'Is it free?',
    answer: 'Yes. OpenSTR is free and open source under the GPL-3.0 license. No subscription fees, no per-property charges. You run it on your own infrastructure.',
  },
  {
    question: 'Can I self-host it?',
    answer: 'Yes — that is the point. Run it on a Linux server using Docker. The repo includes a deploy.sh script that handles building, migrations, and SSL setup. Node.js 20+ and Docker are the only prerequisites.',
  },
];

const FaqPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="relative h-72 md:h-96 overflow-hidden">
        <StaticImage
          src="../images/happyguests.png"
          alt="Happy guests at a well-managed rental property"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="center"
          style={{ position: 'absolute', inset: 0, height: '100%' }}
          placeholder="blurred"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-300 mb-2">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">Common questions.</h1>
          </div>
        </div>
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
  <Seo title="FAQ — OpenSTR" description="Common questions about OpenSTR — self-hosted STR cleaning management." pathname="/faq" />
);
