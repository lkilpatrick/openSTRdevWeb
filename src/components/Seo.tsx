import React from 'react';

export interface SeoProps {
  title: string;
  description: string;
  ogImage?: string;
  pathname?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, ogImage, pathname }) => {
  const siteUrl = 'https://openstr.app';
  const canonicalUrl = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
    </>
  );
};

export default Seo;
