import React from 'react';
import Section from './Section';
import Container from './Container';

const problems = [
  { title: 'WhatsApp chaos', body: 'Coordinating cleaners over chat. No record, no accountability, no system.' },
  { title: 'Spreadsheet scheduling', body: 'Manual calendars that don\'t know your Airbnb bookings and break constantly.' },
  { title: 'No photo evidence', body: 'No way to verify a clean was done right before the next guest arrives.' },
  { title: 'SaaS lock-in', body: 'Paying monthly for tools that own your data and can change pricing anytime.' },
];

const solutions = [
  { title: 'iCal scheduling', body: 'Imports your Airbnb calendar automatically. Cleaners always know what\'s coming.' },
  { title: 'Room checklists', body: 'Structured, room-by-room task lists with drag-and-drop reorder.' },
  { title: 'Photo evidence', body: 'Mandatory before/after photos per room for every clean.' },
  { title: 'Self-hosted', body: 'Runs on your server. Your data, your control, no subscription.' },
];

const ProblemSolution: React.FC = () => {
  return (
    <>
      <Section className="bg-stone-50">
        <Container>
          <div className="max-w-xl mb-10">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The problem</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-stone-900">
              STR cleaning runs on group chats and spreadsheets.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-stone-900 mb-1">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-xl mb-10">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The solution</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-stone-900">
              A real system. On your own server.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-stone-900 mb-1">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ProblemSolution;
