import './index.css'
import {
  SiReact, SiNodedotjs, SiDocker, SiGithubactions,
  SiPostgresql, SiNginx, SiLinux, SiFigma,
  SiHtml5, SiWordpress
} from 'react-icons/si'
import { useEffect, useState } from 'react'
function App() {
  const words = ['front to back.', 'React to Docker.', 'idea to production.']
const [currentWord, setCurrentWord] = useState(0)
const [displayed, setDisplayed] = useState('')
const [deleting, setDeleting] = useState(false)

useEffect(() => {
  const word = words[currentWord]
  let timeout: ReturnType<typeof setTimeout>

  if (!deleting && displayed.length < word.length) {
    timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
  } else if (!deleting && displayed.length === word.length) {
    timeout = setTimeout(() => setDeleting(true), 2000)
  } else if (deleting && displayed.length > 0) {
    timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
  } else if (deleting && displayed.length === 0) {
    setDeleting(false)
    setCurrentWord((currentWord + 1) % words.length)
  }

  return () => clearTimeout(timeout)
}, [displayed, deleting, currentWord])
  return (
    <>
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(15,15,15,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #222',
        padding: '1.1rem 0',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: '15px', color: '#f0f0f0' }}>Raed Mejri</span>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '14px', color: '#888' }}>
            {['About', 'Experience', 'Skills', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                onMouseEnter={e => e.currentTarget.style.color = '#f0f0f0'}
                onMouseLeave={e => e.currentTarget.style.color = '#888'}
                style={{ transition: 'color 0.2s' }}>{item}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div className="container">
          <div style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#888',
            border: '1px solid #333',
            borderRadius: '20px',
            padding: '5px 14px',
            marginBottom: '2rem',
          }}>
            Available for Werkstudent · Nürnberg, Germany
          </div>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            maxWidth: '680px',
            letterSpacing: '-0.02em',
            color: '#f0f0f0',
          }}>
            I build —<br />
            <span style={{ color: '#444' }}>
  {displayed}
  <span style={{ borderRight: '2px solid #555', marginLeft: '2px', animation: 'blink 1s infinite' }}></span>
</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#888',
            maxWidth: '500px',
            marginBottom: '2.5rem',
            lineHeight: 1.75,
          }}>
            Full-stack developer. M.Sc. candidate in Computer Science. React, Node.js, and cloud infrastructure — end to end.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn btn-primary">View projects</a>
            <a href="#contact" className="btn">Get in touch →</a>
          </div>
          <div style={{
            display: 'flex',
            gap: '2.5rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #222',
          }}>
            {[
              { num: '3+', label: 'Years of experience' },
              { num: 'React · Node · Docker', label: 'Core stack' },
              { num: 'FR · DE · EN', label: 'Languages' },
            ].map(stat => (
              <div key={stat.label}>
                <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '3px', color: '#f0f0f0' }}>{stat.num}</p>
                <p style={{ fontSize: '12px', color: '#666' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      {/* About */}
<section id="about" style={{ background: '#141414' }}>
  <div className="container">
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
      <img
        src="/raed.jpeg"
        alt="Raed Mejri"
        style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #333',
          flexShrink: 0,
        }}
      />
      <div>
        <p className="section-label">About</p>
        <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '0.5rem', color: '#f0f0f0' }}>The engineer behind the stack</h2>
        <p style={{ fontSize: '14px', color: '#666' }}>Nürnberg, Germany · Available for Werkstudent</p>
      </div>
    </div>
    <p style={{ fontSize: '16px', color: '#888', maxWidth: '600px', lineHeight: 1.8, marginBottom: '1rem' }}>
      From Tunisia to Germany — three cities, three universities, one consistent thread: building software that works end to end. I design interfaces, architect APIs, and deploy infrastructure.
    </p>
    <p style={{ fontSize: '16px', color: '#888', maxWidth: '600px', lineHeight: 1.8 }}>
      I don't wait for the ops team or the design team — when I take on a task, I own it from the first commit to the live environment.
    </p>
    <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem' }}>
      {[
        { label: 'Degree', value: 'B.Sc. IT Networks & Software' },
        { label: 'Currently', value: 'M.Sc. Computer Science' },
        { label: 'Languages', value: 'FR · DE · EN' },
      ].map(item => (
        <div key={item.label}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555', marginBottom: '4px' }}>{item.label}</p>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#f0f0f0' }}>{item.value}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Experience */}
      <section id="experience">
        <div className="container">
          <p className="section-label">Experience & Projects</p>
          <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '2.5rem', color: '#f0f0f0' }}>What I've built</h2>

          {/* Stages */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555', marginBottom: '1.5rem' }}>Work experience</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  company: 'ABSHORE',
                  role: 'Software Engineering Intern — Bachelor Final Year Project',
                  period: 'Feb 2021 – Jul 2021',
                  location: 'Tunis, Tunisia',
                  points: [
                    'Led the full redesign of the company website',
                    'Developed and customized the theme aligned with company branding',
                    'Focused on performance, accessibility, and improved user experience',
                  ],
                  tags: ['WordPress', 'Web Design', 'Frontend'],
                },
                {
                  company: 'Tunisie Telecom',
                  role: 'Network & Infrastructure Intern',
                  period: 'Jun 2019 – Aug 2019',
                  location: 'Tunisia',
                  points: [
                    'Gained foundational knowledge in computer networks and telecom systems',
                    'Assisted in configuring network equipment and troubleshooting connectivity issues',
                    'Observed how a national telecom operator manages large-scale infrastructure',
                  ],
                  tags: ['Networks', 'Infrastructure', 'Telecom'],
                },
              ].map(exp => (
                <div key={exp.company} style={{
                  border: '1px solid #222',
                  borderRadius: '12px',
                  padding: '1.75rem 2rem',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#444'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#222'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#f0f0f0' }}>{exp.company}</h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ fontSize: '12px', padding: '3px 10px', border: '1px solid #333', borderRadius: '20px', color: '#888' }}>{exp.period}</span>
                      <span style={{ fontSize: '12px', padding: '3px 10px', border: '1px solid #333', borderRadius: '20px', color: '#888' }}>{exp.location}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '1rem', fontStyle: 'italic' }}>{exp.role}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.25rem' }}>
                    {exp.points.map(point => (
                      <li key={point} style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#888' }}>
                        <span style={{ color: '#555', flexShrink: 0 }}>→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '12px', padding: '3px 10px', background: '#1a1a1a', borderRadius: '4px', color: '#666' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555', marginBottom: '1.5rem' }}>Projects</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                title: 'Personal Portfolio',
                desc: 'Designed and built this portfolio from scratch using React and Vite. Deployed on Vercel with continuous deployment via GitHub Actions.',
                stack: ['React', 'Vite', 'CSS', 'Vercel'],
                link: 'https://github.com/raedmejrii/portfolio',
              },
              {
                title: 'ABSHORE Website Redesign',
                desc: 'Full redesign of a company website during internship. Focused on modern design, performance optimization and brand consistency.',
                stack: ['WordPress', 'CSS', 'Web Design', 'UX'],
                link: 'https://github.com/raedmejrii',
              },
              {
                title: 'Network Infrastructure Lab',
                desc: 'Hands-on experience configuring network equipment and troubleshooting connectivity issues at Tunisie Telecom.',
                stack: ['Networking', 'Linux', 'Infrastructure'],
                link: 'https://github.com/raedmejrii',
              },
            ].map(project => (
              <div key={project.title} style={{
                border: '1px solid #222',
                borderRadius: '12px',
                padding: '1.75rem 2rem',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#444'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#222'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#f0f0f0' }}>{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: '13px',
                    color: '#666',
                    border: '1px solid #333',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#f0f0f0'; e.currentTarget.style.color = '#f0f0f0' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#666' }}
                  >
                    GitHub →
                  </a>
                </div>
                <p style={{ fontSize: '14px', color: '#888', marginBottom: '1.25rem', lineHeight: 1.7 }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.stack.map(tag => (
                    <span key={tag} style={{ fontSize: '12px', padding: '3px 10px', background: '#1a1a1a', borderRadius: '4px', color: '#666' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Skills */}
<section id="skills" style={{ background: '#141414' }}>
  <div className="container">
    <p className="section-label">Skills</p>
    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '2.5rem', color: '#f0f0f0' }}>Technical stack</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
      {[
        {
          title: 'Frontend',
          items: [
            { name: 'React / JSX', icon: <SiReact color="#61DAFB" size={16} /> },
            { name: 'HTML5', icon: <SiHtml5 color="#E34F26" size={16} /> },
            { name: 'CSS3', icon: <span style={{ fontSize: '14px', color: '#1572B6' }}>❋</span> },
            { name: 'Figma', icon: <SiFigma color="#F24E1E" size={16} /> },
          ],
        },
        {
          title: 'Backend & APIs',
          items: [
            { name: 'Node.js', icon: <SiNodedotjs color="#339933" size={16} /> },
            { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" size={16} /> },
            { name: 'WordPress', icon: <SiWordpress color="#21759B" size={16} /> },
            { name: 'REST API design', icon: <span style={{ fontSize: '14px' }}>⚡</span> },
          ],
        },
        {
          title: 'DevOps & Cloud',
          items: [
            { name: 'Docker', icon: <SiDocker color="#2496ED" size={16} /> },
            { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" size={16} /> },
            { name: 'Linux · Bash', icon: <SiLinux color="#FCC624" size={16} /> },
            { name: 'Nginx', icon: <SiNginx color="#009639" size={16} /> },
          ],
        },
      ].map(col => (
        <div key={col.title} style={{
          background: '#0f0f0f',
          border: '1px solid #222',
          borderRadius: '12px',
          padding: '1.75rem',
          transition: 'border-color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#444'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#222'}
        >
          <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '1.25rem', color: '#f0f0f0' }}>{col.title}</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {col.items.map(item => (
              <li key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#888' }}>
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section id="contact">
        <div className="container">
          <div style={{
            background: '#141414',
            border: '1px solid #222',
            borderRadius: '16px',
            padding: '3.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555', marginBottom: '0.75rem' }}>
                Available now
              </p>
              <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#f0f0f0', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                Open to Werkstudent roles
              </h2>
              <p style={{ fontSize: '15px', color: '#888', maxWidth: '420px', lineHeight: 1.7 }}>
                15–20h/week · Nürnberg or remote · Starting now
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '180px' }}>
              <a href="mailto:raedmjr00@gmail.com" className="btn btn-primary" style={{ textAlign: 'center' }}>
                Send me a message
              </a>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://linkedin.com/in/raedmejrii" target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: 1, textAlign: 'center' }}>LinkedIn</a>
                <a href="https://github.com/raedmejrii" target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: 1, textAlign: 'center' }}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '2rem 0', textAlign: 'center', fontSize: '13px', color: '#444' }}>
        © 2026 Raed Mejri · Built with React + Vite · Deployed on Vercel
      </footer>
    </>
  )
}

export default App