// PostCSS configuration for Tailwind CSS
//
// This file configures the PostCSS pipeline used by Vite.  It enables
// Tailwind CSS and Autoprefixer so that you can use modern CSS features
// across browsers and rely on Tailwind's utility classes.
/**
 * PostCSS configuration
 *
 * Tailwind CSS now provides its own PostCSS plugin via the
 * `@tailwindcss/postcss` package.  This config enables Tailwind and
 * Autoprefixer.  See https://tailwindcss.com/docs/installation/postcss for
 * details.
 */
/**
 * PostCSS configuration for Tailwind CSS.
 *
 * We rely on the default tailwindcss PostCSS plugin.  Autoprefixer is
 * included to ensure vendor prefixes are added where necessary.
 */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};