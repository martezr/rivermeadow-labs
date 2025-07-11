// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  awsSidebar: [
    {
      type: 'category',
      label: 'AWS Workshop',
      collapsible: false,
      collapsed: false,
            items: [
      {
        type: 'autogenerated',
        dirName: 'aws', // Generate sidebar slice from docs/tutorials/easy
      }]
    },
  ],
  azureSidebar: [
      {
        type: 'autogenerated',
        dirName: 'azure', // Generate sidebar slice from docs/tutorials/easy
      },
  ],
  redHatOpenShiftSidebar: [
      {
        type: 'autogenerated',
        dirName: 'red-hat-openshift', // Generate sidebar slice from docs/tutorials/easy
      },
  ],
  hpeVMESidebar: [
      {
        type: 'autogenerated',
        dirName: 'hpe-vm-essentials', // Generate sidebar slice from docs/tutorials/easy
      },
  ],
};

export default sidebars;
