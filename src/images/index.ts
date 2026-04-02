// src/images/index.ts
// Centralized image reference for use with StaticImage src prop
// Note: StaticImage requires literal string src props at build time,
// so this mapping is for documentation/reference only.
// Components use StaticImage with literal relative paths directly.
export const IMAGES = {
  outside: '../images/Outside.png',
  sunrise: '../images/sunrise.png',
  daytime: '../images/Daytime.png',
  insidepool: '../images/Insidepool.png',
  happyguests: '../images/happyguests.png',
  cleaningBefore: '../images/Cleaningb4.png',
  cleaningAfter: '../images/cleaningafter.png',
} as const;
