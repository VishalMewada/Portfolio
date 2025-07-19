import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ChevronRight } from 'lucide-react';
import profilePic from '../public/vishal.jpg'; // drop your 500×500 px square image here

/* --------------------------------- DATA ---------------------------------- */
const BIO = {
  tagline: 'Empowering business growth through transformative learning design and AI-driven solutions.',
  short: '10+ years leading global, scalable instructional programs with AI integration and measurable impact.',
  long: 'Vishal Mewara is a learning-experience leader who translates complex business needs into learner-centric, AI-powered solutions. Recognised as a Top Performer at IBM and GXO, he has improved content-development velocity by 30 % and reduced delivery errors by 90 % through robust QA frameworks and process automation.',
};

const TIMELINE = [
  {
    role: 'Assistant Manager – Content Design & AI Integration',
    company: 'IBM India Pvt Ltd',
    tenure: 'Apr 2024 – Present',
    bullets: [
      'Lead AI integration across learning products; automate storyboarding & QA workflows.',
      'Drive agile pods of 8–10 ID, multimedia, and QA specialists.',
      'Piloted GPT-3 driven micro-learning prototypes—reduced design time by 25 %.',
    ],
  },
  {
    role: 'Lead Instructional Designer',
    company: 'GXO GOSC India Pvt Ltd',
    tenure: 'Jan 2023 – Apr 2024',
    bullets: [
      'Owned end-to-end blended programs (instructor-led, e-learning, WalkMe simulations).',
      'Mentored 6 junior IDs; instituted peer-review sprints that cut defects by 40 %.',
      'Recognised as “Top Performer” three consecutive years.',
    ],
  },
  {
    role: 'Instructional Designer',
    company: 'GXO GOSC India Pvt Ltd',
    tenure: 'Oct 2019 – Dec 2022',
    bullets: [
      'Developed 120+ hours of e-learning for supply-chain and logistics clients.',
      'Introduced Vyond and Rise 360 templates that saved 200+ production hours.',
    ],
  },
  {
    role: 'Course Managing Editor',
    company: 'Packt Publishing Pvt Ltd',
    tenure: 'Aug 2015 – Jun 2019',
    bullets: [
      'Led 200+ technical-video courses from ideation to release.',
      'Established Agile-Kanban board for editorial; improved on-time delivery from 72 % to 97 %.',
    ],
  },
];

const SKILLS = [
  'Articulate 360', 'Rise 360', 'Camtasia', 'Adobe Premiere Pro',
  'Vyond', 'MySimpleShow', 'Audacity', 'SharePoint', 'WalkMe',
  'Storyboarding', 'QA', 'Multimedia Dev', 'eLearning', 'Agile',
];

const CERTS = [
  { title: 'Jira Fundamentals Badge', issuer: 'Atlassian', date: 'May 2024', url: '#' },
  { title: 'Synthesia Video Essentials', issuer: 'Synthesia', date: 'May 2024', url: '#' },
  { title: 'Professional 2D Animation with Vyond', issuer: 'Udemy', date: 'Apr 2022', url: '#' },
  { title: 'Instructional Design Principles', issuer: 'Eduflow', date: 'Mar 2022', url: '#' },
];

/* --------------------------------- UI ------------------------------------ */
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="py-20 px-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-charcoal mb-10">{title}</h2>
    {children}
  </section>
);

const TimelineCard: React.FC<typeof TIMELINE[0]> = ({ role, company, tenure, bullets }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="relative pl-8 border-l-2 border-mint"
  >
    <p className="text-sm text-gray-500 mb-1">{tenure}</p>
    <h3 className="text-xl font-semibold text-charcoal">{role}</h3>
    <p className="text-md text-gray-700 mb-3">{company}</p>
    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </motion.div>
);

const SkillPill: React.FC<{ label: string }> = ({ label }) => (
  <span className="bg-mint/20 text-charcoal text-sm font-medium px-3 py-1 rounded-full">
    {label}
  </span>
);

const CertCard: React.FC<typeof CERTS[0]> = ({ title, issuer, date, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer"
    className="block p-4 rounded-lg bg-softYellow/20 hover:bg-softYellow/40 transition">
    <h4 className="font-semibold text-charcoal">{title}</h4>
    <p className="text-sm text-gray-600">{issuer} • {date}</p>
  </a>
);

/* --------------------------------- PAGE ---------------------------------- */
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vishal Mewara – Learning Experience Leader</title>
        <meta name="description" content={BIO.short} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <ul className="flex gap-6 justify-center py-4 text-sm font-medium text-charcoal">
          {['Home', 'About', 'Experience', 'Skills', 'Certs', 'Contact'].map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className="hover:text-mint transition">
                {n}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <header id="home" className="text-center py-28 bg-offWhite">
        <motion.img
          src={profilePic.src}
          alt="Vishal Mewara"
          className="w-36 h-36 rounded-full mx-auto mb-6 object-cover shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal">Vishal Mewara</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-xl mx-auto">{BIO.tagline}</p>
      </header>

      {/* ABOUT */}
      <Section title="About">
        <p className="text-gray-700 leading-relaxed">{BIO.long}</p>
        <p className="mt-4 text-gray-700"><strong>Education:</strong> Bachelors of Information Technology, University of Mumbai (2014)</p>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Work Experience">
        <div className="space-y-12">
          {TIMELINE.map((t, i) => <TimelineCard key={i} {...t} />)}
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Skills & Expertise">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((s) => <SkillPill key={s} label={s} />)}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section title="Certifications">
        <div className="grid sm:grid-cols-2 gap-4">
          {CERTS.map((c, i) => <CertCard key={i} {...c} />)}
        </div>
      </Section>

      {/* PORTFOLIO (placeholder) */}
      <Section title="Portfolio">
        <p className="text-gray-600">Selected projects will be showcased here shortly. Stay tuned!</p>
      </Section>

      {/* CONTACT */}
      <footer id="contact" className="py-16 bg-charcoal text-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Let’s Connect</h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:vishalkamalmewara@gmail.com" className="flex items-center gap-2 hover:text-mint transition">
              <Mail size={20} /> Email
            </a>
            <a href="https://www.linkedin.com/in/vishalmewara/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-mint transition">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        :root {
          --color-charcoal: #2E2E2E;
          --color-mint: #A8E6CF;
          --color-softYellow: #FFD3B6;
          --color-offWhite: #FAFAFA;
        }
        .text-charcoal { color: var(--color-charcoal); }
        .bg-mint { background-color: var(--color-mint); }
        .bg-softYellow { background-color: var(--color-softYellow); }
        .bg-offWhite { background-color: var(--color-offWhite); }
        .border-mint { border-color: var(--color-mint); }
      `}</style>
    </>
  );
}
