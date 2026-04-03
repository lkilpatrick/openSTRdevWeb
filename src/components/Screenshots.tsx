import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Section from './Section';
import Container from './Container';

const Screenshots: React.FC = () => {
  return (
    <>
      {/* Admin screenshots */}
      <Section className="bg-stone-50">
        <Container>
          <div className="max-w-xl mb-10">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Admin panel</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-stone-900">
              Full visibility from the dashboard.
            </h2>
            <p className="mt-3 text-stone-500 text-sm leading-relaxed">
              See upcoming stays, assigned cleaners, past sessions, and supply alerts — all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-sm overflow-hidden border border-stone-200 shadow-sm">
              <StaticImage
                src="../images/Dashboard.png"
                alt="OpenSTR admin dashboard showing upcoming stays and cleaning schedule"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                quality={90}
              />
            </div>
            <div className="rounded-sm overflow-hidden border border-stone-200 shadow-sm">
              <StaticImage
                src="../images/adminchecklist.png"
                alt="OpenSTR admin checklist view showing room-by-room tasks"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                quality={90}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Mobile screenshots */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-xl mb-10">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Cleaner mobile app</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-stone-900">
              Cleaners work from their phone.
            </h2>
            <p className="mt-3 text-stone-500 text-sm leading-relaxed">
              Schedule view, room checklists, and photo capture. Sessions only activate on your local WiFi.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
            <div className="w-full sm:w-64 rounded-2xl overflow-hidden border border-stone-200 shadow-md mx-auto">
              <StaticImage
                src="../images/MobileApp.png"
                alt="OpenSTR mobile app showing cleaner schedule"
                layout="fullWidth"
                objectFit="contain"
                placeholder="blurred"
                quality={90}
              />
            </div>
            <div className="w-full sm:w-64 rounded-2xl overflow-hidden border border-stone-200 shadow-md mx-auto">
              <StaticImage
                src="../images/mobileappchecklist.png"
                alt="OpenSTR mobile app showing room checklist during a clean"
                layout="fullWidth"
                objectFit="contain"
                placeholder="blurred"
                quality={90}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Screenshots;
