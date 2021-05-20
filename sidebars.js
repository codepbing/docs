/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    // {
    //   type: 'autogenerated',
    //   dirName: '.'
    // },
    'welcome',
    {
      type: 'category',
      label: 'ZeroTier',
      items: ['zerotier/ztintro', 
        'zerotier/manual', 
        'zerotier/rules', 
        'zerotier/zerotier.conf', 
        'zerotier/multipath', 
        'zerotier/moons'
      ]
    },
    {
      type: 'category',
      label: 'SDK',
      items: ['libzt-c/zerotier-sdk','libzt-c/tutorial.html'],
    },
    {
      type: 'category',
      label: 'API Docs',
      items: [
        {
          type: 'category',
          label: 'REST APIs',
          items: [
            {
              type: 'category',
              label: 'Central',
              items: [
                // {
                //   type: 'link',
                //   label: 'Latest',
                //   href: '/centralv1'
                // },
                {
                  type: 'link',
                  label: 'V1',
                  href: '/central/v1',
                }
              ]
            },
            {
              type: 'category',
              label: 'Service',
              items: [
                // {
                //   type: 'link',
                //   label: 'Latest',
                //   href: '/servicev1',
                // },
                {
                  type: 'link',
                  label: 'V1',
                  href: '/service/v1',
                }
              ]
            }
          ],
        },
        {
          type: "category",
          label: "ZeroTierOne C API",
          items: [
            'autogen/libztcore/files/_zero_tier_one_8h',
            'autogen/libztcore/index_classes'
          ]
        },
        {
          type: 'category',
          label: 'libzt C API',
          items: [
            'autogen/libzt/files/_zero_tier_sockets_8h',
            'autogen/libzt/index_classes'
          ]
        }
      ],
    }

  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
