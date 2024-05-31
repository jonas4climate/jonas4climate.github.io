// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jonas4climate', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'jonas4climate/opinion-formation-complexity',
          'wykremcony/computational-biology-assignments',
          'jonas4climate/galaxy-zoo',
          'jonas4climate/modelling-natural-processes',
          'jonas4climate/numerical-algorithms-practice',
          'jonas4climate/learn_fourier',
        ],
      },
    },
    external: {
      header: 'Climate Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Climate Education Talk @ European Parliament, Brussels',
          description: 'As one of four selected youth in the EU, I received public speaking coaching and the opportunity to speak about the intersection of climate education & democracy in the EU parliament as part of the Level Up! conference.',
          imageUrl: 'https://raw.githubusercontent.com/jonas4climate/jonas4climate.github.io/main/files/youth_talk.jpg',
          link: 'https://audiovisual.ec.europa.eu/en/video/I-235549',
        },
        {
          title: 'Event Coordination @ COP26, Glasgow',
          description:
            'I coordinated the annual final ceremony of the ClimateScience Olympiad as a volunteer at ClimateScience, a leading climate education charity. The event was held in the Green Zone of the global conference of parties (COP26) in Glasgow, UK.',
          imageUrl:
            'https://raw.githubusercontent.com/jonas4climate/jonas4climate.github.io/main/files/cop26.jpg',
          link: 'https://unfccc.int/process-and-meetings/the-paris-agreement/the-glasgow-climate-pact-key-outcomes-from-cop26',
        },
        {
          title: 'Climate Education Advocacy @ SB56, Bonn',
          description:
            'I attended the SB56 climate change conference in Bonn to network, establish partnerships and expand free climate education access as a volunteer at ClimateScience, a leading climate education charity.',
          imageUrl:
            'https://raw.githubusercontent.com/jonas4climate/jonas4climate.github.io/main/files/sb56.jpg',
          link: 'https://unfccc.int/SB56',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jonas Schäfer',
    description: 'Computational Science student @ UvA (Amsterdam) with a passion for climate education and sustainability.',
    imageURL: '',
  },
  social: {
    linkedin: 'jonas-schaefer',
    // twitter: '',
    // mastodon: '',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: '',
    // dev: '',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: 'jonas_cs',
    website: 'https://jonas4climate.github.io',
    // phone: '',
    email: 'jonas(dot)schaefer00(at)gmail(dot)com',
  },
  resume: {
    fileUrl:
      'https://github.com/jonas4climate/cv/blob/main/CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Machine Learning',
    'Neural Networks',
    'Scientific Computing',
    'Uncertainty Quantification',
    'Stochastic Modelling',
  ],
  experiences: [
    {
      company: 'proWIN Winter GmbH',
      position: 'Sustainability Intern',
      from: 'March 2023',
      to: 'September 2023',
      companyLink: 'https://prowin.net',
    },
    {
      company: 'ClimateScience',
      position: 'Head of Human Resources (Volunteer)',
      from: 'June 2022',
      to: 'March 2023',
      companyLink: 'https://climatescience.org',
    },
  ],
  certifications: [
    {
      name: 'European (Climate) Policy Workshop',
      body: 'European Horizons',
      year: 'December 2022',
      link: 'https://raw.githubusercontent.com/jonas4climate/jonas4climate.github.io/main/files/EH_certificate.pdf',
    },
  ],
  educations: [
    {
      institution: 'University of Amsterdam & Vrije University',
      degree: 'M.Sc. Computational Science (joint)',
      from: 'September 2021',
      to: 'July 2023',
    },
    {
      institution: 'University of Birmingham',
      degree: 'B.Sc. (Hons) Computer Science',
      from: 'September 2018',
      to: 'June 2021',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
