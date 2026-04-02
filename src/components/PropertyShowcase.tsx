import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Section from './Section';
import Container from './Container';

const PropertyShowcase: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The properties</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-stone-900 leading-snug">
            Every detail, under your control.
          </h2>
        </div>
      </Container>

      {/* Full-bleed editorial grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Large feature image */}
        <div className="md:col-span-2 aspect-[16/7] overflow-hidden">
          <StaticImage
            src="../images/Outside.png"
            alt="Luxury rental property exterior at golden hour"
            layout="fullWidth"
            objectFit="cover"
            objectPosition="center 60%"
            placeholder="blurred"
            quality={85}
            className="w-full h-full"
          />
        </div>

        {/* Two smaller images */}
        <div className="aspect-[4/3] overflow-hidden">
          <StaticImage
            src="../images/Insidepool.png"
            alt="Indoor pool area of a luxury rental property"
            layout="fullWidth"
            objectFit="cover"
            objectPosition="center"
            placeholder="blurred"
            quality={85}
            className="w-full h-full"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <StaticImage
            src="../images/Daytime.png"
            alt="Rental property during the day"
            layout="fullWidth"
            objectFit="cover"
            objectPosition="center"
            placeholder="blurred"
            quality={85}
            className="w-full h-full"
          />
        </div>

        {/* Sunrise full-width */}
        <div className="md:col-span-2 aspect-[16/5] overflow-hidden">
          <StaticImage
            src="../images/sunrise.png"
            alt="Rental property at sunrise"
            layout="fullWidth"
            objectFit="cover"
            objectPosition="center 40%"
            placeholder="blurred"
            quality={85}
            className="w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default PropertyShowcase;
