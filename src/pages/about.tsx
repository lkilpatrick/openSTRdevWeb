import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';
import Container from '../components/Container';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="relative h-72 md:h-96 overflow-hidden">
        <StaticImage
          src="../images/Daytime.png"
          alt="Rental property during the day"
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
            <p className="text-xs uppercase tracking-widest text-stone-300 mb-2">About</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">What is OpenSTR?</h1>
          </div>
        </div>
      </div>

      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">A real system for STR hosts</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            OpenSTR replaces the chaos of WhatsApp messages, spreadsheets, and Google Forms with a proper cleaning management system. Scheduling, checklists, photo evidence, supply tracking, and monitoring — all in one place.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Built for Airbnb hosts. Works for any short-term rental platform. Self-hosted on your own infrastructure, so your data stays yours.
          </p>
        </Container>
      </Section>

      <Section className="bg-stone-50">
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-6">What it does</h2>
          <ul className="space-y-3 text-stone-600">
            <li className="flex gap-3"><span className="text-stone-300 mt-0.5">—</span>Automatic schedule from your Airbnb iCal — cleaners always know what's coming</li>
            <li className="flex gap-3"><span className="text-stone-300 mt-0.5">—</span>Calendar dashboard with upcoming stays, past cleans, and guest info</li>
            <li className="flex gap-3"><span className="text-stone-300 mt-0.5">—</span>Room-by-room checklists with drag-and-drop reorder</li>
            <li className="flex gap-3"><span className="text-stone-300 mt-0.5">—</span>Mandatory before/after photo evidence per room</li>
            <li className="flex gap-3"><span className="text-stone-300 mt-0.5">—</span>Multi-property and multi-cleaner support</li>
            <li className="flex gap-3"><span className="text-stone-300 mt-0.5">—</span>Supply alerts — cleaners flag low stock inline</li>
            <li className="flex gap-3"><span className="text-stone-300 mt-0.5">—</span>Network-aware mobile app — cleaning sessions only activate on your local WiFi</li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Who it is for</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Built for STR hosts who want a real system instead of a patchwork of apps. Also for developers who want to contribute to a practical, real-world operations platform.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Licensed under GPL-3.0. Free to use, modify, and distribute — including for your own STR business. Modified versions must remain open source.
          </p>
        </Container>
      </Section>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <Seo title="About OpenSTR" description="Open-source short-term rental management. Scheduling, checklists, photo evidence, and supply tracking — self-hosted." pathname="/about" />
);
