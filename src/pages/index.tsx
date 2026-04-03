import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import ValueProps from '../components/ValueProps';
import ContributorCta from '../components/ContributorCta';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <ProblemSolution />
      <ValueProps />
      <ContributorCta />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <Seo
    title="OpenSTR — STR Cleaning Management You Control"
    description="Self-hosted, open-source cleaning management for short-term rental hosts. Scheduling, checklists, photo evidence, and supply tracking."
    pathname="/"
  />
);
