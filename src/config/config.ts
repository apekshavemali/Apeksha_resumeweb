// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Apeksha Vemali',
    title: 'Student',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'I am a first-year economics student with a strong interest in private equity, macroeconomic theory, and the intersection of game mechanics and resource allocation. My background includes leadership roles in research and content writing for NGOs, alongside extensive experience in event hosting and student welfare coordination. Currently, I am focused on bridging the gap between theoretical economic models and real-world financial strategy.\n' +
      '\n',
      'Christ University, Special Interest in Game Theory. \n' +
      '\n' +
      'Analytical BSc Economics student with a specialised focus on macroeconomic theory and private equity. Proven track record in leadership as Head of Research for an NGO and administrative experience as an Assistant to a Co-Founder, effectively balancing technical research with corporate operations. Experienced communicator with a background in event hosting and cultural team leadership, adept at translating complex data into clear, impactful narratives.\n' +
      '\n' +
      'Co-authored with Esha Naidu "Percy Jackson".',
    tagline: 'Learning something new everyday',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Apeksha Vemali- Student',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Student', 'Pubic Finance', 'Game Theory', 'Research Enthusiast'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ University',
      degree: 'Bsc in Economics and Data Science',
      year: 'Batch of 2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['Relevant coursework: Microeconomics, Macroeconomics, Data Visualisation, Statistics '], 
    },
    {
      institution: 'DAV Public School, Pune',
      degree: 'Grade 1-12',
      year: 'Batch of 2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['Graduated with Distinction in Commerce Stream, focusing on economics, business studies, and accountancy'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Investment Banking and Entrepreneurship Program',
      specialisation: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },      ],
    },
    {
      title: 'Marketing',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Head of Research and Content',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Jeevan NGO',
      time: '(September 2025 – Present)',
      desp: ['Managed stakeholder outreach, contacting local organizations and authorities to coordinate event logistics and permissions.', 'Produced research-based content and reports to document the NGO’s impact and support fundraising efforts.'],
    },
    {
      title: 'Emcee Committee and University Cultural Team',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Student Welfare Office, Christ University',
      time: '(July 2025 – Present)',
      desp: ['Hosted 3 major college events, managing the stage and keeping the program on track for large audiences.', 'Worked with event organizers to handle script changes and technical cues smoothly during live performances., 1st Place, Darpan ’25: Won the top spot in a competitive university-wide cultural event. , 2nd Place, Blossoms ’26: Placed in the top three for a major inter-college arts festival for dance.'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Project Title 1',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Short description of your project and what it does...',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Percy Jackson',
      description: '.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'vemali.apeksha@gmail.com',
    linkedin: 'https://www.linkedin.com/in/apekshavemali/',
    github: 'https://github.com/apekshavemali',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
