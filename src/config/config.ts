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
    tagline: 'Learning more and more every day',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Your Name | Your Title',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Aspiring Economist', 'Public FInancing', 'Your Interest', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/

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
      time: '(MMM YYYY – MMM YYYY)',
      desp: ['Hosted 3 major college events, managing the stage and keeping the program on track for large audiences.', 'Worked with event organizers to handle script changes and technical cues smoothly during live performances., 1st Place, Darpan ’25: Won the top spot in a competitive university-wide cultural event. , 2nd Place, Blossoms ’26: Placed in the top three for a major inter-college arts festival for dance.'],
    },
  ],


  contact: {
    email: 'vemali.apeksha@gmail.com',
    linkedin: 'https://www.linkedin.com/in/apeksha-vemali/',
  },
};

export default siteConfig;