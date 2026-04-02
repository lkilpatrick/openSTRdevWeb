import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';
import Container from '../components/Container';

const ways = [
  {
    category: 'Workflows',
    items: [
      { label: 'Suggest a workflow', description: 'Share how you handle a specific operations task and propose it as a built-in workflow.', href: 'https://github.com/openstr/openstr/discussions' },
      { label: 'Document your process', description: 'Write up how you use OpenSTR for a specific property type or use case.', href: 'https://github.com/openstr/openstr/tree/main/docs' },
    ],
  },
  {
    category: 'Code',
    items: [
      { label: 'Fix a bug', description: 'Browse open issues tagged "bug" and submit a pull request with a fix.', href: 'https://github.com/openstr/openstr/issues?q=is%3Aissue+label%3Abug' },
      { label: 'Build a feature', description: 'Pick up an issue tagged "help wanted" or propose something new in discussions.', href: 'https://github.com/openstr/openstr/issues?q=is%3Aissue+label%3A%22help+wanted%22' },
    ],
  },
  {
    category: 'Documentation',
    items: [
      { label: 'Improve the docs', description: 'Fix unclear explanations, add examples, or write guides for common setups.', href: 'https://github.com/openstr/openstr/tree/main/docs' },
      { label: 'Translate content', description: 'Help make OpenSTR accessible to operators in other languages.', href: 'https://github.com/openstr/openstr/discussions' },
    ],
  },
];

const ContributePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Page header */}
      <div className="bg-stone-50 border-b border-stone-100 py-20">
        <Container narrow>
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Contribute</p>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-stone-900 leading-tight">
            Help build OpenSTR.
          </h1>
          <p className="mt-4 text-stone-500 leading-relaxed max-w-xl">
            OpenSTR is built by people who use it. Whether you write code, manage properties, or just have strong opinions about software — there is a way to contribute.
          </p>
        </Container>
      </div>

      {/* Who should contribute */}
      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Who should contribute</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            You do not need to be a developer to contribute to OpenSTR. The project needs operators who can describe real workflows, writers who can explain things clearly, and developers who can build and fix things.
          </p>
          <ul className="space-y-2 text-stone-600">
            <li className="flex gap-2"><span className="text-stone-300">—</span> Property operators with workflow knowledge</li>
            <li className="flex gap-2"><span className="text-stone-300">—</span> Developers comfortable with the tech stack</li>
            <li className="flex gap-2"><span className="text-stone-300">—</span> Writers who can improve documentation</li>
            <li className="flex gap-2"><span className="text-stone-300">—</span> Anyone who has found a bug or has a clear feature idea</li>
          </ul>
        </Container>
      </Section>

      {/* How to help */}
      <Section className="bg-stone-50">
        <Container>
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">How to help</h2>
            <p className="text-stone-600 leading-relaxed">
              Start with whatever feels most natural. Every contribution matters, regardless of size.
            </p>
          </div>

          <div className="space-y-12">
            {ways.map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-6">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {items.map(({ label, description, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border-t border-stone-200 pt-5 block hover:border-stone-900 transition-colors"
                    >
                      <h4 className="text-sm font-semibold text-stone-900 mb-1 group-hover:underline">{label}</h4>
                      <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
                      <span className="mt-3 inline-block text-xs text-stone-400 group-hover:text-stone-900 transition-colors">
                        GitHub ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Start here */}
      <Section>
        <Container narrow>
          <h2 className="text-2xl font-heading font-semibold text-stone-900 mb-4">Start here</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            The best place to start is the GitHub repository. Read the contributing guide, browse open issues, and introduce yourself in the discussions.
          </p>
          <a
            href="https://github.com/openstr/openstr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors"
          >
            View the repository on GitHub ↗
          </a>
        </Container>
      </Section>
    </Layout>
  );
};

export default ContributePage;

export const Head: HeadFC = () => (
  <Seo
    title="Contribute to OpenSTR"
    description="Find out how to contribute to OpenSTR — report issues, suggest workflows, write code, or improve docs."
    pathname="/contribute"
  />
);
