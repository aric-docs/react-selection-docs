import { defineConfig } from 'dumi';
import * as path from 'node:path';

export default defineConfig({
  alias: {
    '@builtins': path.resolve(__dirname, '.dumi/theme/builtins'),
  },
  base: '/react-selection-docs/',
  publicPath: '/react-selection-docs/',
  logo: '/react-selection-docs/logo.png',
  locales: [{ id: 'en-US', name: 'English' }],
  resolve: {
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'react-selection-docs',
    description: 'Docs for react-selection.',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
      {
        title: 'Components',
        link: '/components',
      },
      {
        title: 'Playground',
        link: '/playground',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/aric-tpls/react-selection-docs',
    },
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
