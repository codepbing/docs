/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require("path");

module.exports = {
  title: "ZeroTier Documentation",
  tagline: "Because documentation makes things more good",
  url: "https://docs.zerotier.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "zerotier", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  plugins: [path.resolve(__dirname, "matomo-plugin")],
  themeConfig: {
    // for some reason if python or java are enabled here, the OpenAPI docs go boom :(
    prism: {
      additionalLanguages: [
        "rust",
        "powershell",
        "csharp",
        "python",
        "java",
        "scala",
      ],
    },
    matomo: {
      matomoUrl: "https://matomo.zerotier.com/",
      siteId: "4",
    },

    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'This banner is here to inform you that we have a new banner',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },

    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌜",
        darkIconStyle: {},
        lightIcon: "🌞",
        lightIconStyle: {},
      },
    },

    separateCss: true,
    navbar: {
      title: "ZeroTier Documentation",
      logo: {
        alt: "My Site Logo",
        src: "img/ZeroTierIcon.png",
      },
      items: [
        {
          to: "https://www.zerotier.com",
          label: "Home",
        },
        {
          to: "https://www.zerotier.com/download",
          label: "Install",
        },
        {
          to: "https://my.zerotier.com/",
          label: "Manage Networks",
        },
        {
          to: "https://discuss.zerotier.com/",
          label: "Community",
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "ZeroTier",
          items: [
            {
              label: "Home",
              href: "https://www.zerotier.com",
            },
            {
              label: "Downloads",
              href: "https://www.zerotier.com/download/",
            },
            {
              label: "Blog",
              href: "https://www.zerotier.com/blog/",
            },
            {
              label: "ZeroTier Central",
              href: "https://my.zerotier.com",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "ZeroTier",
              to: "/zerotier/ztintro",
            },
            {
              label: "SDK",
              to: "/sockets/tutorial.html",
            },
            {
              label: "Central REST API",
              to: "/central/v1",
            },
            {
              label: "Service REST API",
              to: "/service/v1",
            },
            {
              label: "ZeroNSD (DNS Service) Quickstart",
              to: "/zeronsd/quickstart",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "ZeroTier Discussions",
              href: "https://discuss.zerotier.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/zerotier",
            },
            {
              label: "GitHub",
              href: "https://github.com/zerotier/ZeroTierOne",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZeroTier, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/zerotier/docs",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            routePath: "/central/v1",
            spec: "./static/openapi/centralv1.json",
          },
          {
            routePath: "/service/v1",
            spec: "./static/openapi/servicev1.json",
          },
        ],
        theme: {
          primaryColor: "#FFB354",
          redocOptions: {
            hideDownloadButton: false,
          },
        },
      },
    ],
  ],
};
