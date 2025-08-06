/**
 * Tailwind CSS configuration
 *
 * This configuration enables Tailwind within the Vite React project.  It
 * specifies the files that Tailwind should scan for class names and sets up
 * an extension point for customizing the design system.  Feel free to add
 * additional colors, spacing values or other theme customizations under the
 * `theme.extend` section.  See https://tailwindcss.com/docs/configuration for
 * more information.
 */
export default {
  // Tell Tailwind where to look for class names.  These paths include the
  // root index.html and any JavaScript/JSX/TypeScript files within src.
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Extend the default color palette with your own project colours.  The
      // dark theme of Tech Talk with Diana uses subtle blues and grays.
      colors: {
        primary: '#0a192f', // dark navy background
        secondary: '#112240',
        accent: '#64ffda', // green accent colour
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};