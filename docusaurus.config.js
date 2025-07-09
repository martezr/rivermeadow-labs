// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  showLastUpdateTime: true,
  sidebarCollapsible: true,
//  remarkPlugins: [
//    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
//  ],
  sidebarPath: require.resolve('./sidebars.js'),
};

const docs = [
  {
    id: 'hpe-vm-essentials',
    path: 'docs/hpe-vm-essentials',
    routeBasePath: '/hpe-vm-essentials',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RiverMeadow Interactive Labs',
  tagline: 'Learn about the RiverMeadow workload mobility platform at your own pace with step-by-step interactive lessons designed for hands-on practitioners, no matter where you are in your journey.',
  favicon: 'img/rivermeadow_favicon.webp',
  staticDirectories: ['static'],

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'martezr', // Usually your GitHub org/user name.
  projectName: 'rivermeadow-labs', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
      navbar: {
        title: 'RiverMeadow',
        logo: {
          alt: 'My Site Logo',
          src: 'img/rivermeadow_favicon.webp',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Workshops',
            position: 'left',
            items: [
              {
                label: 'Amazon Web Services (AWS)',
                to: '/docs/aws/introduction',
              },
              {
                label: 'Microsoft Azure',
                to: '/docs/azure/introduction',
              },
              {
                label: 'Red Hat OpenShift',
                to: '/docs/azure/introduction',
              },
              {
                label: 'HPE Morpheus VM Essentials',
                to: '/docs/azure/introduction',
              },
              // ... more items
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@RiverMeadowsoftware',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/rivermeadow-software',
              },
              {
                label: 'X (formerly Twitter)',
                href: 'https://x.com/RiverMeadow1',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} RiverMeadow Software Inc. All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
