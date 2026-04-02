import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';
import Container from '../components/Container';

const WhyOpenstrPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="relative h-72 md:h-96 overflow-hidden">
        <StaticImage
          src="../images/sunrise.png"
          alt="Rental property at sunrise"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="center 40%"
          style={{ position: 'absolute', inset: 0, height: '100%' }}
          placeholder="blurred"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-300 mb-2">The case for OpenSTR</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">Your property. Your software. Your rules.</h1>
          </div>
        </div>
      </div>

      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Ownership</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Most STR tools are SaaS — your cleaning schedules, photo evidence, guest data, and cleaner history all live on someone else's servers. When they change pricing or shut down, you lose everything.
          </p>
          <p className="text-stone-600 leading-relaxed">
            OpenSTR runs on your own server. Your data stays in your database. If you stop using it tomorrow, you take everything with you.
          </p>
        </Container>
      </Section>

      <Section className="bg-stone-50">
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Built for how STR actually works</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Generic property management tools aren't built around the STR turnover cycle. OpenSTR is. It imports your Airbnb calendar automatically, assigns cleaners to specific properties, enforces photo evidence per room, and tracks supply levels inline.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The mobile app is network-aware — cleaners can view their schedule from anywhere, but cleaning sessions only activate when they're on your local WiFi. No more remote check-ins.
          </p>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Open source, GPL-3.0</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Every line of code is public. Use it, modify it, deploy it for your own STR business. If you distribute a modified version, it stays open source under the same license.
          </p>
          <p className="text-stone-600 leading-relaxed">
            You already understand the value of owning your properties. OpenSTR applies that same principle to your software.
          </p>
        </Container>
      </Section>
    </Layout>
  );
};

export default WhyOpenstrPage;

export const Head: HeadFC = () => (
  <Seo title="Why OpenSTR" description="Self-hosted, open-source STR cleaning management. Your data, your server, your rules." pathname="/why-openstr" />
);
