import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from './Button';

const GITHUB = 'https://github.com/lkilpatrick/openstr';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-end pb-24 md:items-center md:pb-0">
      <StaticImage
        src="../images/Outside.png"
        alt="Luxury coastal rental property exterior"
        layout="fullWidth"
        objectFit="cover"
        objectPosition="center"
        style={{ position: 'absolute', inset: 0, height: '100%' }}
        imgStyle={{ objectFit: 'cover' }}
        placeholder="blurred"
        quality={90}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)' }} />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-0 md:pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Manage your rental property on software you control
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-lg">
            Cleaning management for STR hosts. Scheduling, checklists, and photo evidence — self-hosted and open source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href={GITHUB} external>View on GitHub</Button>
            <Button variant="secondary" href="/why-openstr">Explore OpenSTR</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
