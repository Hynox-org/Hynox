/**
 * Single source of truth for open positions. Used by the careers listing and
 * by the application form's role dropdown, so the two can never drift apart.
 */
export type Role = {
  title: string;
  desc: string;
  duration: string;
  location: string;
  type: string;
  stipend: string;
  requirements: string[];
  responsibilities: string[];
};

export const roles: Role[] = [
  {
    title: 'Digital Marketing Intern',
    desc: 'Join our performance marketing team and learn the ins and outs of paid advertising, SEO, and digital strategy. You\'ll help execute campaigns that drive real business growth for our clients.',
    duration: '6 months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Basic understanding of digital marketing channels (Meta Ads, Google Ads, SEO)',
      'Strong analytical skills and ability to interpret data',
      'Good written communication skills for ad copywriting',
      'Eagerness to learn performance marketing strategies and campaign optimization'
    ],
    responsibilities: [
      'Assist in setting up and managing Meta Ads and Google Ads campaigns',
      'Conduct keyword research and assist in SEO optimization',
      'Monitor campaign performance and prepare weekly analytics reports',
      'Collaborate with the creative team to develop effective ad creatives'
    ]
  },
  {
    title: 'Graphic Design & Video Editing Intern',
    desc: "Join our creative team to design stunning visual content, including posters, social media assets, and high-quality video edits. You'll help shape our brand's visual identity across all digital platforms.",
    duration: '6 months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Proficiency in tools like Photoshop, Illustrator, Premiere Pro, or After Effects',
      'A strong portfolio showcasing graphic design and video editing skills',
      'Creativity and an eye for detail and visual aesthetics',
      'Ability to understand brand guidelines and translate them into engaging visual assets'
    ],
    responsibilities: [
      'Create high-quality social media graphics, flyers, posters, and web banners',
      'Edit short-form video content (Reels, Shorts, Ads) with dynamic captions and transitions',
      'Collaborate with the content team to bring visual stories to life',
      'Maintain design consistency across all digital assets'
    ]
  },
  {
    title: 'Content Creation Intern',
    desc: "Be part of our content strategy team and help create engaging content across multiple platforms. You'll learn content marketing, social media strategy, and brand storytelling.",
    duration: '6 months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Excellent written and verbal communication skills in English',
      'Familiarity with social media trends (Instagram, LinkedIn, YouTube)',
      'Basic understanding of SEO and content marketing concepts',
      'A portfolio of written content, blog posts, scripts, or social media posts is a plus'
    ],
    responsibilities: [
      'Write engaging ad copies, scripts for UGC videos, and social media captions',
      'Research trending topics and brainstorm creative content ideas',
      'Help manage social media content calendars and schedule posts',
      'Draft simple, informative articles and blog posts for the website'
    ]
  },
  {
    title: 'Software Development Intern',
    desc: 'Join our tech team and contribute to cutting-edge software solutions. You\'ll work on real-world projects involving AI/ML implementations, full-stack web applications, and innovative digital products using modern technologies.',
    duration: '6 months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Good understanding of programming fundamentals and JavaScript/TypeScript',
      'Familiarity with React, Next.js, and Node.js web frameworks',
      'Understanding of HTML, CSS, and databases (SQL or MongoDB)',
      'Strong problem-solving skills and eagerness to learn new technologies'
    ],
    responsibilities: [
      'Write clean, maintainable code for front-end and back-end modules',
      'Assist in developing and integrating RESTful APIs and databases',
      'Debug issues and participate in application testing and code reviews',
      'Collaborate with senior developers on building custom business platforms'
    ]
  },
  {
    title: 'UI/UX Designer Intern',
    desc: 'Join our design team and help create exceptional user experiences across digital platforms. You\'ll work on user interface design, user research, prototyping, and collaborate with developers to bring designs to life using modern design tools and methodologies.',
    duration: '6 months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Proficiency in Figma and other design tools',
      'Strong understanding of user-centered design principles, wireframing, and prototyping',
      'Basic understanding of frontend constraints and layout systems',
      'A portfolio demonstrating clean visual designs and user flows'
    ],
    responsibilities: [
      'Design wireframes, user journeys, and high-fidelity UI prototypes in Figma',
      'Create consistent design systems and component libraries',
      'Conduct basic user research and usability testing to refine experiences',
      'Collaborate closely with developers to ensure accurate layout implementation'
    ]
  },
  {
    title: 'Flutter App Development Intern',
    desc: 'Join our mobile development team and gain hands-on experience in building cross-platform applications using Flutter. You\'ll work on exciting projects, contribute to UI/UX implementation, and learn best practices in mobile app development.',
    duration: '6 months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Familiarity with Dart programming language and Flutter SDK',
      'Basic understanding of state management (Provider, Bloc, or Riverpod)',
      'Knowledge of REST API integration and mobile layout building',
      'Eagerness to build responsive layouts and high-performance apps'
    ],
    responsibilities: [
      'Develop cross-platform mobile app features using Flutter',
      'Integrate backend APIs and databases with Flutter applications',
      'Optimize app UI/UX animations and responsiveness across device sizes',
      'Assist in publishing apps to Google Play Store and Apple App Store'
    ]
  },
  {
    title: 'AI/ML Development Intern',
    desc: 'Contribute to innovative AI/ML projects, developing and implementing machine learning models and algorithms. You\'ll gain experience in data preprocessing, model training, and deployment.',
    duration: '6 months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Strong understanding of Python and basic machine learning concepts',
      'Familiarity with library ecosystems like NumPy, Pandas, and Scikit-Learn',
      'Basic knowledge of deep learning frameworks (TensorFlow, PyTorch) or OpenAI APIs',
      'Strong analytical skills and data-driven mindset'
    ],
    responsibilities: [
      'Develop data preprocessing scripts and clean raw datasets for training',
      'Train, fine-tune, and evaluate machine learning/deep learning models',
      'Deploy models to cloud infrastructure as API endpoints',
      'Assist in building custom RAG chatbots and document OCR tools'
    ]
  },
  {
    title: 'Business Development Executive (Internship)',
    desc: 'Kickstart your career in tech sales. You\'ll learn to identify new business opportunities, generate B2B leads, and assist in closing deals while understanding the software and digital marketing landscape.',
    duration: '6 Months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Excellent interpersonal skills and convincing verbal communication',
      'Eagerness to learn sales cycles, lead generation, and client pitching',
      'Basic interest in IT services, custom software, and digital marketing',
      'Self-driven mindset to achieve targets and grow professionally'
    ],
    responsibilities: [
      'Assist in identifying potential B2B clients across various sectors',
      'Help initiate sales pitches and schedule service demonstrations',
      'Support the sales team in preparing proposals and contracts',
      'Maintain CRM data and follow up with prospective leads'
    ]
  },
  {
    title: 'Lead Generation Executive',
    desc: 'Identify and qualify potential business prospects, build targeted B2B contact lists, and initiate outbound communication to generate qualified sales opportunities for our tech and marketing solutions.',
    duration: 'Full-time',
    location: 'Hybrid',
    type: 'Full-time',
    stipend: 'Competitive Salary + Performance Incentives',
    requirements: [
      'Any Degree / Diploma in any discipline',
      'Good communication skills (verbal and written)',
      'Familiarity with online research, LinkedIn, and lead sourcing channels',
      'Self-motivated with strong follow-up and organizational abilities'
    ],
    responsibilities: [
      'Conduct market research to identify potential B2B clients and key decision-makers',
      'Build and maintain verified prospect databases and lead pipelines',
      'Initiate outreach via email, LinkedIn, and phone to introduce Hynox services',
      'Qualify inbound and outbound leads and schedule discovery calls for the sales team'
    ]
  },
  {
    title: 'Content Creator',
    desc: 'Produce engaging visual, video, and written content for brand campaigns, social media channels, and client marketing initiatives that capture attention and drive engagement.',
    duration: 'Full-time',
    location: 'Hybrid',
    type: 'Full-time',
    stipend: 'Competitive Salary',
    requirements: [
      'Visual Communication / Mass Communication or Any Degree',
      'Creative skills and a strong portfolio showcasing visual, graphic, or video content',
      'Hands-on familiarity with editing tools (Premiere Pro, CapCut, Canva, Photoshop) and camera handling',
      'Strong pulse on social media trends (Instagram Reels, YouTube Shorts, LinkedIn)'
    ],
    responsibilities: [
      'Conceptualize, script, film, and edit engaging short-form video content and social media assets',
      'Collaborate with the marketing team on creative campaign ideas, UGC videos, and client shoots',
      'Maintain brand consistency and aesthetic quality across all digital platforms',
      'Track trend patterns and post analytics to continually improve content performance'
    ]
  },
  {
    title: 'Digital Marketing Executive',
    desc: 'Plan and execute high-performing multi-channel digital campaigns, optimize paid advertising across Meta and Google, and drive measurable customer acquisition and brand growth.',
    duration: 'Full-time',
    location: 'Hybrid',
    type: 'Full-time',
    stipend: 'Competitive Salary + Performance Incentives',
    requirements: [
      'Any Degree / Diploma in any discipline',
      'Digital marketing knowledge across paid ads, SEO, and social channels',
      'Understanding of analytics tools (Google Analytics, Meta Business Suite, Search Console)',
      'Strong analytical mindset and good communication skills'
    ],
    responsibilities: [
      'Manage and optimize paid ad campaigns on Meta Ads and Google Ads to maximize ROAS',
      'Execute SEO strategies and content optimization to grow organic website traffic',
      'Monitor campaign metrics, track conversion funnels, and prepare analytical reports',
      'Collaborate with designers and content creators to build high-converting ad creatives'
    ]
  },
  {
    title: 'Business Development Executive (BDE)',
    desc: 'Drive revenue growth by building strong client relationships, identifying high-value B2B opportunities, and pitching custom software and digital solutions from lead qualification to deal closure.',
    duration: 'Full-time',
    location: 'Hybrid',
    type: 'Full-time',
    stipend: 'Competitive Salary + Performance Incentives',
    requirements: [
      'Any Degree / Diploma in any discipline',
      'Communication and convincing skills (verbal, presentation, and negotiation)',
      'Basic understanding of IT services, custom software, and digital marketing offerings',
      'Goal-oriented mindset with the ability to manage customer relationships effectively'
    ],
    responsibilities: [
      'Identify and convert high-potential B2B clients in targeted industries',
      'Conduct professional service demonstrations and handle complex client objections',
      'Negotiate terms, prepare detailed service contracts, and close sales',
      'Coordinate with technical and creative teams to ensure seamless client onboarding'
    ]
  },
  {
    title: 'Presenter (Male & Female)',
    desc: 'Be the on-screen face and voice of Hynox and our brand partners. Present engaging social media reels, product walkthroughs, brand stories, and client showcases with energy and confidence.',
    duration: 'Full-time',
    location: 'On-site / Hybrid',
    type: 'Full-time',
    stipend: 'Competitive Salary',
    requirements: [
      'Any Degree in any discipline',
      'Good communication skills in Tamil and English',
      'High confidence and excellent on-camera presence',
      'Expressive body language and ability to deliver scripts naturally'
    ],
    responsibilities: [
      'Host and present short-form video reels, shorts, product explainers, and advertisements',
      'Collaborate with the creative team during scripting and brainstorming sessions',
      'Participate in on-location and studio shoots for client and brand campaigns',
      'Maintain an engaging, authentic presentation style aligned with brand guidelines'
    ]
  },
  {
    title: 'Performance Marketing Specialist',
    desc: 'Drive scalable growth through data-driven paid advertising campaigns across Meta, Google, and other platforms. Manage ad budgets, optimize conversions, and deliver measurable ROI for our clients.',
    duration: 'Full-time',
    location: 'Hybrid',
    type: 'Full-time',
    stipend: 'Competitive Salary + Performance Incentives',
    requirements: [
      'Proven experience in managing high-budget Meta Ads and Google Ads campaigns',
      'Strong analytical skills with proficiency in Google Analytics and tracking tools',
      'Ability to interpret performance data and optimize campaigns for ROAS/CPA',
      'Experience in A/B testing ad creatives, copy, and landing pages'
    ],
    responsibilities: [
      'Strategize, execute, and manage paid acquisition campaigns across digital platforms',
      'Continuously monitor, analyze, and optimize campaign performance metrics',
      'Collaborate with creative and content teams to develop high-performing ad creatives',
      'Prepare detailed performance reports and provide actionable insights'
    ]
  }
];

/** Guards against an application arriving for a role that no longer exists. */
export function isValidRoleTitle(title: string | undefined): boolean {
  return !!title && (roles.some((role) => role.title === title) || title === 'Business Development Executive (Full-Time)');
}
