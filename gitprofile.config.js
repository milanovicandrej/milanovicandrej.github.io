// gitprofile.config.js

const config = {
  github: {
    username: 'milanovicandrej', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'andrej-milanović-204b42207',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'https://www.milanovicandrej.github.io',
    phone: '',
    email: 'milanovicandrej@outlook.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/milanovicandrej/milanovicandrej.github.io/main/milanovicandrej-resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Microsoft Azure',
    'Linode',
    'Docker',
    'Kubernetes',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'JavaScript',
    'React.js',
    'Git'
  ],
  /*experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Faculty of Electronic Engineering, Niš',
      degree: 'Degree',
      from: '2019',
      to: 'currently',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Teams Commander',
      description:
        'Teams Commander is an open source project dedicated to making management of Microsoft Teams the easy way !',
      imageUrl: 'https://raw.githubusercontent.com/milanovicandrej/teams-commander/cc65db9121bf1d5f5b1a1ef8ff774b869ccd85e1/Resources/logo.png',
      link: 'https://github.com/milanovicandrej/teams-commander',
    },
    {
      title: 'Filmska reč',
      description:
        'Website dedicated to movie reviews and movie discussions',
      imageUrl: 'https://www.filmskarec.rs/wp-content/uploads/2021/11/silueta_zuta_negativ-716x1024.png',
      link: 'https://www.filmskarec.rs',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },*/
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  /*footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
    */
};

export default config;
