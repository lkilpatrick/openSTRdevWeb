import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';
import Container from '../components/Container';

const GITHUB = 'https://github.com/lkilpatrick/openstr';

const ways = [
  {
    category: 'For STR hosts',
    items: [
      { label: 'Report a bug', description: 'Something not working? Open an issue.', href: `${GITHUB}/issues` },
      { label: 'Suggest a workflow', description: 'Have a better way to handle turnovers? Start a discussion.', href: `${GITHUB}/discussions` },
    ],
  },
  {
    category: 'For developers',
    items: [
      { label: 'Fix a bug', description: 'Browse issues and submit a pull request.', href: `${GITHUB}/issues` },
      { label: 'Build a feature', description: 'Pick up a "help wanted" issue or propose something new.', href: `${GITHUB}/issues` },
    ],
  },
  {
    category: 'For writers',
    items: [
      { label: 'Improve the docs', description: 'Fix unclear explanations or add setup guides.', href: `${GITHUB}/tree/main/docs` },
      { label: 'Write a guide', description: 'Document how you use OpenSTR for your specific setup.', href: `${GITHUB}/discussions` },
    ],
  },
];

const ContributePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="relative h-72 md:h-96 overflow-hidden">
        <StaticImage
          src="../images/Outside.png"
          alt="Rental property exterior"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="center"
          style={{ position: 'absolute', inset: 0, height: '100%' }}
          placeholder="blurred"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-300 mb-2">Contribute</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-tight">Help build OpenSTR.</h1>
          </div>
        </div>
      </div>

      <Section>
        <Container narrow>
          <p className="text-stone-600 leading-relaxed">
            OpenSTR welcomes contributions from hosts, developers, and STR industry folks. You don't need to write code — if you manage properties, your workflow knowledge is valuable.
          </p>
        </Container>
      </Section>

      <Section className="bg-stone-50">
        <Container>
          <div className="space-y-12">
            {ways.map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-6">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {items.map(({ label, description, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group border-t border-stone-200 pt-5 block hover:border-stone-900 transition-colors">
                      <h4 className="text-sm font-semibold text-stone-900 mb-1 group-hover:underline">{label}</h4>
                      <p className="text-sm text-stone-500">{description}</p>
                      <span className="mt-3 inline-block text-xs text-stone-400 group-hover:text-stone-900 transition-colors">GitHub ↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors">
            View the repository on GitHub ↗
          </a>
        </Container>
      </Section>
    </Layout>
  );
};

export default ContributePage;

export const Head: HeadFC = () => (
  <Seo title="Contribute to OpenSTR" description="Contribute to OpenSTR — report bugs, suggest workflows, write code, or improve docs." pathname="/contribute" />
);
