import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const GuestOutcome: React.FC = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center">
      {/* Background image */}
      <StaticImage
        src="../images/happyguests.png"
        alt="Happy guests enjoying a well-managed rental property"
        layout="fullWidth"
        objectFit="cover"
        objectPosition="center"
        style={{ position: 'absolute', inset: 0, height: '100%' }}
        imgStyle={{ objectFit: 'cover' }}
        placeholder="blurred"
        quality={85}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Quote */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-white leading-snug">
          "When the operations are right, the experience feels effortless."
        </p>
      </div>
    </div>
  );
};

export default GuestOutcome;
