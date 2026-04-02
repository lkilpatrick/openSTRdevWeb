import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';
import Container from '../components/Container';

const WhyOpenstrPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Page header */}
      <div className="bg-stone-900 py-20">
        <Container narrow>
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The case for OpenSTR</p>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">
            Your property. Your software. Your rules.
          </h1>
        </Container>
      </div>

      {/* Ownership */}
      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Ownership</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            When you use a commercial property management platform, you are renting access to your own operation. The data you generate — guest records, booking history, maintenance logs, financial reports — lives on someone else's servers, governed by someone else's terms of service.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            OpenSTR inverts that relationship. You install it on infrastructure you control. Your data is stored in a database you own. If you decide to stop using OpenSTR tomorrow, you take everything with you.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Ownership is not just a technical detail. It is the foundation of a sustainable operation. You cannot build long-term systems on top of platforms that can change their pricing, deprecate their APIs, or shut down without warning.
          </p>
        </Container>
      </Section>

      {/* Flexibility */}
      <Section className="bg-stone-50">
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Flexibility</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Every property operation is different. The workflows that work for a single vacation rental in a beach town are not the same as those for a portfolio of urban apartments. Commercial platforms try to serve everyone with the same product, which means they serve no one particularly well.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            OpenSTR is designed to be configured, extended, and modified. You can build the automations that match your actual process. You can integrate with the tools your team already uses. You can add features that matter to your operation without waiting for a product roadmap that may never prioritize them.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Flexibility is not about having infinite options. It is about having the right options for your specific situation, and the ability to change them when your situation changes.
          </p>
        </Container>
      </Section>

      {/* Self-hosting */}
      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Self-hosting</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Self-hosting means running software on infrastructure you control — a server you own, a cloud account in your name, or a managed host you have chosen. It is not complicated, and it does not require a dedicated IT team.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            The benefits are concrete. Your data does not leave your environment. Your costs are predictable and scale with your actual usage. You are not subject to pricing changes, feature removals, or platform shutdowns. You can audit exactly what the software is doing.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            OpenSTR is built to be straightforward to deploy. The documentation covers common hosting environments, and the community can help with setup questions. The goal is to make self-hosting accessible to operators who are not developers, not just to engineers who already know how to do it.
          </p>
          <p className="text-stone-600 leading-relaxed">
            If you manage properties for a living, you already understand the value of owning your assets. OpenSTR applies that same principle to your software.
          </p>
        </Container>
      </Section>
    </Layout>
  );
};

export default WhyOpenstrPage;

export const Head: HeadFC = () => (
  <Seo
    title="Why OpenSTR — Ownership, Flexibility, and Self-Hosting"
    description="The case for ownership, flexibility, and self-hosting your rental property management platform."
    pathname="/why-openstr"
  />
);
