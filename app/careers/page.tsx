'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const roles = [
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
    title: 'Cloud Security Intern',
    desc: 'Join our cybersecurity team to gain practical experience in cloud security. You\'ll assist in implementing security measures, conducting vulnerability assessments, and monitoring cloud environments.',
    duration: '6 months',
    location: 'Hybrid',
    type: 'Internship',
    stipend: 'Performance-based',
    requirements: [
      'Basic understanding of cloud platforms (AWS, Google Cloud, or Azure)',
      'Familiarity with security principles, networking, and firewalls',
      'Knowledge of vulnerability scanners, pen-testing tools, or threat models',
      'Eager interest in cybersecurity standards and certifications'
    ],
    responsibilities: [
      'Monitor cloud network activity for security compliance and anomalies',
      'Conduct scheduled vulnerability scans and draft threat reports',
      'Configure and review access controls, security groups, and cloud IAM roles',
      'Research the latest cybersecurity threats and suggest improvements'
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
    title: 'Business Development Executive (Full-Time)',
    desc: 'Drive revenue growth by building strong client relationships, identifying high-value B2B opportunities, and closing deals. Manage the entire sales cycle from lead generation to successful project kickoff.',
    duration: 'Full-time',
    location: 'Hybrid',
    type: 'Full-time',
    stipend: 'Competitive Salary + Performance Incentives',
    requirements: [
      'Proven track record in sales, business development, or client relationship management',
      'Strong understanding of IT services, custom software, and digital marketing',
      'Excellent negotiation, communication, and presentation skills',
      'Ability to independently manage the sales pipeline and meet targets'
    ],
    responsibilities: [
      'Identify and convert high-potential B2B clients in targeted industries',
      'Conduct professional service demonstrations and handle complex objections',
      'Negotiate terms, prepare detailed service contracts, and close sales',
      'Coordinate with technical teams to ensure seamless client onboarding'
    ]
  }
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<any>(null);

  useEffect(() => {
    const animationClasses = [
      'reveal-on-scroll', 'reveal-fade-in', 'reveal-from-left',
      'reveal-from-right', 'reveal-zoom', 'reveal-flip-x', 'reveal-blur',
    ];
    const selector = animationClasses.map(c => `.${c}`).join(', ');
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        } else {
          entry.target.classList.remove('is-visible');
          entry.target.classList.add('is-hidden');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh' }}>
        {/* ─── 1. HERO ─── */}
        <section className="hero-2col-section" style={{ minHeight: '40vh', paddingTop: '0rem', alignItems: 'flex-start' }}>
          <div className="hero-aurora-glow" style={{ top: '20%' }}></div>
          <div className="careers-hero-content reveal-blur" style={{ width: '100%', textAlign: 'center', marginTop: '-3rem' }}>
            <div className="badge">JOIN OUR TEAM</div>
            <h1 className="svc-subpage-h1" style={{ fontSize: '3.2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
              Join Our <span className="svc-hero-accent-bw">Team</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.7', margin: '0 auto', maxWidth: '650px' }}>
              Start your career journey with hands-on experience and learn from industry professionals in a dynamic environment.
            </p>
          </div>
        </section>

        {/* ─── 2. OPPORTUNITIES ─── */}
        <section className="svc-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem 4rem 2rem' }}>

          <div className="careers-grid reveal-zoom reveal-delay-200">
            {roles.map((role, i) => (
              <div className="careers-card" key={i}>
                <div>
                  <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{role.type}</span>
                  <h3>{role.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(0, 0, 0, 0.6)', lineHeight: '1.5', minHeight: '75px' }}>
                    {role.desc.substring(0, 120)}...
                  </p>
                  
                  <div className="careers-meta-grid">
                    <div className="careers-meta-item">
                      <span className="careers-meta-label">Duration:</span>
                      <span className="careers-meta-value">{role.duration}</span>
                    </div>
                    <div className="careers-meta-item">
                      <span className="careers-meta-label">Location:</span>
                      <span className="careers-meta-value">{role.location}</span>
                    </div>
                    <div className="careers-meta-item">
                      <span className="careers-meta-label">Type:</span>
                      <span className="careers-meta-value">{role.type}</span>
                    </div>
                    <div className="careers-meta-item">
                      <span className="careers-meta-label">Stipend:</span>
                      <span className="careers-meta-value">{role.stipend}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRole(role)}
                  className="btn btn-hero-solid"
                  style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', cursor: 'pointer', textAlign: 'center' }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ─── 3. ROLE MODAL DETAILS ─── */}
      {selectedRole && (
        <div className="careers-modal-overlay" onClick={() => setSelectedRole(null)}>
          <div className="careers-modal" onClick={(e) => e.stopPropagation()}>
            <button className="careers-modal-close" onClick={() => setSelectedRole(null)}>×</button>
            
            <span className="badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>{selectedRole.type}</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.5rem' }}>{selectedRole.title}</h2>
            
            <div className="careers-meta-grid" style={{ background: '#0d0d0d', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '1.5rem' }}>
              <div className="careers-meta-item">
                <span className="careers-meta-label">Duration:</span>
                <span className="careers-meta-value">{selectedRole.duration}</span>
              </div>
              <div className="careers-meta-item">
                <span className="careers-meta-label">Location:</span>
                <span className="careers-meta-value">{selectedRole.location}</span>
              </div>
              <div className="careers-meta-item">
                <span className="careers-meta-label">Type:</span>
                <span className="careers-meta-value">{selectedRole.type}</span>
              </div>
              <div className="careers-meta-item">
                <span className="careers-meta-label">Stipend:</span>
                <span className="careers-meta-value">{selectedRole.stipend}</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>About The Position</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.6' }}>{selectedRole.desc}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.8rem' }}>Key Responsibilities</h4>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {selectedRole.responsibilities.map((resp: string, idx: number) => (
                  <li key={idx} style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>{resp}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.8rem' }}>Requirements</h4>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {selectedRole.requirements.map((req: string, idx: number) => (
                  <li key={idx} style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>{req}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
              <a
                href={`mailto:thehynoxofficial@gmail.com?subject=Application for ${selectedRole.title} - HYNOX&body=Hi HYNOX Team,%0D%0A%0D%0AI would like to apply for the ${selectedRole.title} position.%0D%0A%0D%0APlease find my details below:%0D%0AName: %0D%0APhone: %0D%0ALinkedIn/Portfolio: %0D%0A%0D%0A[Please attach your resume to this email]%0D%0A%0D%0ARegards`}
                className="btn btn-hero-solid"
                style={{ flex: 1, textDecoration: 'none', textAlign: 'center', padding: '0.85rem' }}
              >
                Apply via Email
              </a>
              <button
                onClick={() => setSelectedRole(null)}
                className="btn btn-hero-outline"
                style={{ padding: '0.85rem 1.5rem', cursor: 'pointer' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
