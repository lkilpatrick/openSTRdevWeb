import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import ValueProps from '../components/ValueProps';
import PropertyShowcase from '../components/PropertyShowcase';
import CleaningWorkflow from '../components/CleaningWorkflow';
import GuestOutcome from '../components/GuestOutcome';
import WhyOpenstrTeaser from '../components/WhyOpenstrTeaser';
import ContributorCta from '../components/ContributorCta';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <ProblemSolution />
      <ValueProps />
      <PropertyShowcase />
      <CleaningWorkflow />
      <GuestOutcome />
      <WhyOpenstrTeaser />
      <ContributorCta />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <Seo
    title="OpenSTR — Rental Property Management You Control"
    description="OpenSTR is an open-source, self-hosted rental property management platform for short-term and long-term rentals."
    pathname="/"
  />
);
