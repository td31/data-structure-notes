/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tdar.dev',
  tagline: 'Data Structure Notes',
  url: 'https://www.tdar.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'td31',
  projectName: 'Data-Structure-Notes',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'tdar.dev',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Data Structures',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/td31/data-structure-notes',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/td31/data-structure-notes',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
