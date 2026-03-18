import './index.css'
import { useEffect, useState, useRef } from 'react'
import {
  SiReact, SiNodedotjs, SiDocker, SiGithubactions,
  SiPostgresql, SiNginx, SiLinux, SiFigma,
  SiHtml5, SiWordpress
} from 'react-icons/si'
import emailjs from '@emailjs/browser'
emailjs.init('BO2JNRaPsxfN8DbpX')

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const words = ['front to back.', 'React to Docker.', 'idea to production.']
  const [currentWord, setCurrentWord] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const useCounter = (target: number, duration: number = 1500) => {
  const [count, setCount] = useState(0)
  const started = useRef(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 40
        const increment = target / steps
        const interval = duration / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, interval)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, duration])

  return { count, ref }
}

const counter1 = useCounter(2)
const counter2 = useCounter(3)
const [formData, setFormData] = useState({ name: '', email: '', message: '' })
const [sending, setSending] = useState(false)
const [sent, setSent] = useState(false)

const handleSubmit = async () => {
  if (!formData.name || !formData.email || !formData.message) return
  setSending(true)
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: 'service_ehpob77',
        template_id: 'template_7o8zzuj',
        user_id: 'BO2JNRaPsxfN8DbpX',
        template_params: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      }),
    })
    if (response.ok) {
      setSent(true)
      setFormData({ name: '', email: '', message: '' })
    } else {
      const err = await response.text()
      console.error(err)
    }
  } catch (e) {
    console.error(e)
  }
  setSending(false)
}

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

  const bg = darkMode ? '#0f0f0f' : '#f5f5f5'
  const bg2 = darkMode ? '#141414' : '#ebebeb'
  const text = darkMode ? '#f0f0f0' : '#1a1a1a'
  const muted = darkMode ? '#888' : '#555'
  const border = darkMode ? '#222' : '#ddd'
  const cardBg = darkMode ? '#0f0f0f' : '#ffffff'

  return (
    <div style={{ background: bg, color: text, minHeight: '100vh', transition: 'all 0.3s' }}>

      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: darkMode ? 'rgba(15,15,15,0.92)' : 'rgba(245,245,245,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${border}`,
        padding: '1.1rem 0',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: '15px', color: text }}>Raed Mejri</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '14px', color: muted }}>
              {['About', 'Experience', 'Skills', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  onMouseEnter={e => e.currentTarget.style.color = text}
                  onMouseLeave={e => e.currentTarget.style.color = muted}
                  style={{ transition: 'color 0.2s' }}>{item}</a>
              ))}
            </div>
            <button onClick={() => setDarkMode(!darkMode)} style={{
              background: 'none', border: `1px solid ${border}`,
              borderRadius: '20px', padding: '4px 12px',
              cursor: 'pointer', fontSize: '13px', color: muted, transition: 'all 0.2s',
            }}>
              {darkMode ? '☀ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div className="container">
          <div style={{
            display: 'inline-block', fontSize: '12px', fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: muted,
            border: `1px solid ${border}`, borderRadius: '20px',
            padding: '5px 14px', marginBottom: '2rem',
          }}>
            Available for Werkstudent · Nürnberg, Germany
          </div>
          <h1 style={{
            fontSize: '56px', fontWeight: 700, lineHeight: 1.1,
            marginBottom: '1.5rem', maxWidth: '680px',
            letterSpacing: '-0.02em', color: text,
          }}>
            I build —<br />
            <span style={{ color: darkMode ? '#444' : '#aaa' }}>
              {displayed}
              <span style={{ borderRight: `2px solid ${darkMode ? '#555' : '#aaa'}`, marginLeft: '2px', animation: 'blink 1s infinite' }}></span>
            </span>
          </h1>
          <p style={{ fontSize: '18px', color: muted, maxWidth: '500px', marginBottom: '2.5rem', lineHeight: 1.75 }}>
            Full-stack developer. M.Sc. candidate in Computer Science. React, Node.js, and cloud infrastructure — end to end.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn btn-primary">View projects</a>
            <a href="#contact" className="btn">Get in touch →</a>
            <a href="/RaedMejri_CV.pdf" download className="btn">↓ Download CV</a>
          </div>
         <div style={{ display: 'flex', gap: '2.5rem', marginTop: '4rem', paddingTop: '2rem', borderTop: `1px solid ${border}` }}>
  <div ref={counter1.ref}>
    <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '3px', color: text }}>{counter1.count}+</p>
    <p style={{ fontSize: '12px', color: darkMode ? '#666' : '#888' }}>Years of experience</p>
  </div>
  <div ref={counter2.ref}>
    <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '3px', color: text }}>{counter2.count}</p>
    <p style={{ fontSize: '12px', color: darkMode ? '#666' : '#888' }}>Projects completed</p>
  </div>
  <div>
    <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '3px', color: text }}>FR · DE · EN</p>
    <p style={{ fontSize: '12px', color: darkMode ? '#666' : '#888' }}>Languages</p>
  </div>
</div> 
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ background: bg2 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <img src="/raed.jpeg" alt="Raed Mejri" style={{
              width: '140px', height: '140px', borderRadius: '50%',
              objectFit: 'cover', border: `2px solid ${border}`, flexShrink: 0,
            }} />
            <div>
              <p className="section-label">About</p>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '0.5rem', color: text }}>The engineer behind the stack</h2>
              <p style={{ fontSize: '14px', color: muted }}>Nürnberg, Germany · Available for Werkstudent</p>
            </div>
          </div>
          <p style={{ fontSize: '16px', color: muted, maxWidth: '600px', lineHeight: 1.8, marginBottom: '1rem' }}>
            From Tunisia to Germany — three cities, three universities, one consistent thread: building software that works end to end. I design interfaces, architect APIs, and deploy infrastructure.
          </p>
          <p style={{ fontSize: '16px', color: muted, maxWidth: '600px', lineHeight: 1.8 }}>
            I don't wait for the ops team or the design team — when I take on a task, I own it from the first commit to the live environment.
          </p>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem' }}>
            {[
              { label: 'Degree', value: 'B.Sc. IT Networks & Software' },
              { label: 'Currently', value: 'M.Sc. Computer Science' },
              { label: 'Languages', value: 'FR · DE · EN' },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: darkMode ? '#555' : '#999', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ fontSize: '14px', fontWeight: 500, color: text }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ background: bg }}>
        <div className="container">
          <p className="section-label">Experience & Projects</p>
          <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '2.5rem', color: text }}>What I've built</h2>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: darkMode ? '#555' : '#999', marginBottom: '1.5rem' }}>Work experience</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
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
                border: `1px solid ${border}`, borderRadius: '12px',
                padding: '1.75rem 2rem', transition: 'border-color 0.2s', background: cardBg,
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = darkMode ? '#444' : '#bbb'}
                onMouseLeave={e => e.currentTarget.style.borderColor = border}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: text }}>{exp.company}</h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '12px', padding: '3px 10px', border: `1px solid ${border}`, borderRadius: '20px', color: muted }}>{exp.period}</span>
                    <span style={{ fontSize: '12px', padding: '3px 10px', border: `1px solid ${border}`, borderRadius: '20px', color: muted }}>{exp.location}</span>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: darkMode ? '#666' : '#888', marginBottom: '1rem', fontStyle: 'italic' }}>{exp.role}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.25rem' }}>
                  {exp.points.map(point => (
                    <li key={point} style={{ display: 'flex', gap: '8px', fontSize: '14px', color: muted }}>
                      <span style={{ color: darkMode ? '#555' : '#999', flexShrink: 0 }}>→</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '12px', padding: '3px 10px', background: bg2, borderRadius: '4px', color: muted }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: darkMode ? '#555' : '#999', marginBottom: '1.5rem' }}>Projects</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
  title: 'Personal Portfolio',
  desc: 'Designed and built this portfolio from scratch using React and Vite. Dark/light mode, animations, contact form with EmailJS. Deployed on Vercel with CI/CD via GitHub.',
  stack: ['React', 'Vite', 'TypeScript', 'EmailJS', 'Vercel'],
  link: 'https://github.com/raedmejrii/portfolio',
  live: 'https://portfolio-ruby-kappa-22.vercel.app',
},
{
  title: 'ABSHORE Website Redesign',
  desc: 'Full redesign of a company website during Bachelor final year internship. Focused on modern design, performance optimization and brand consistency.',
  stack: ['WordPress', 'CSS', 'Web Design', 'UX'],
  link: 'https://github.com/raedmejrii',
  live: '',
},
{
  title: 'Personal Website — Gamma',
  desc: 'Designed a professional personal webpage using Gamma AI. Structured with 5 sections: Hero, About, Experience, Skills and CTA. Published and live.',
  stack: ['Gamma', 'Web Design', 'Content Strategy'],
  link: '',
  live: 'https://raed-mejri-eab32ka.gamma.site',
},
            ].map(project => (
              <div key={project.title} style={{
                border: `1px solid ${border}`, borderRadius: '12px',
                padding: '1.75rem 2rem', transition: 'border-color 0.2s, box-shadow 0.2s', background: cardBg,
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = darkMode ? '#444' : '#bbb'
                  e.currentTarget.style.boxShadow = darkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = border
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: text }}>{project.title}</h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
  {project.link && (
    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
      fontSize: '13px', color: muted, border: `1px solid ${border}`,
      borderRadius: '6px', padding: '4px 12px', transition: 'all 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = text; e.currentTarget.style.color = text }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = muted }}
    >GitHub →</a>
  )}
  {project.live && (
    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
      fontSize: '13px', color: muted, border: `1px solid ${border}`,
      borderRadius: '6px', padding: '4px 12px', transition: 'all 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = text; e.currentTarget.style.color = text }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = muted }}
    >Live →</a>
  )}
</div>
                </div>
                <p style={{ fontSize: '14px', color: muted, marginBottom: '1.25rem', lineHeight: 1.7 }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.stack.map(tag => (
                    <span key={tag} style={{ fontSize: '12px', padding: '3px 10px', background: bg2, borderRadius: '4px', color: muted }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Education */}
<section id="education" style={{ background: bg2 }}>
  <div className="container">
    <p className="section-label">Education</p>
    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '2.5rem', color: text }}>Academic journey</h2>
    <div style={{ position: 'relative', paddingLeft: '2rem' }}>
      <div style={{
        position: 'absolute', left: '7px', top: '8px', bottom: '8px',
        width: '1px', background: border,
      }} />
      {[
        {
          year: '2024 – 2025',
          school: 'Philipps-Universität Marburg',
          degree: 'Exchange Student — Freemover',
          location: 'Marburg, Germany',
          desc: 'Two semesters exchange program in Computer Science. English-language courses.',
          current: true,
        },
        {
          year: '2021 – 2024',
          school: 'TEK-UP University',
          degree: 'Computer Engineering Cycle (M.Sc. level)',
          location: 'Ariana, Tunisia',
          desc: 'Engineering cycle in Computer Science. All semesters completed — PFE pending.',
          current: false,
        },
        {
          year: '2018 – 2021',
          school: 'ISSATM — Université de Carthage',
          degree: 'Licence Appliquée — IT Networks & Software',
          location: 'Mateur, Tunisia',
          desc: 'Bachelor\'s degree in Applied Computer Science. Graduated with mention Good.',
          current: false,
        },
      ].map((edu, i) => (
        <div key={i} style={{ position: 'relative', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
          <div style={{
            position: 'absolute', left: '-1.72rem', top: '6px',
            width: '12px', height: '12px', borderRadius: '50%',
            background: edu.current ? '#f0f0f0' : border,
            border: `2px solid ${edu.current ? '#f0f0f0' : border}`,
            zIndex: 1,
          }} />
          <div style={{
            background: cardBg, border: `1px solid ${edu.current ? (darkMode ? '#444' : '#bbb') : border}`,
            borderRadius: '12px', padding: '1.5rem',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = darkMode ? '#444' : '#bbb'}
            onMouseLeave={e => e.currentTarget.style.borderColor = edu.current ? (darkMode ? '#444' : '#bbb') : border}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: text }}>{edu.school}</h3>
              <span style={{ fontSize: '12px', padding: '3px 10px', border: `1px solid ${border}`, borderRadius: '20px', color: muted }}>{edu.year}</span>
            </div>
            <p style={{ fontSize: '14px', color: muted, fontStyle: 'italic', marginBottom: '0.4rem' }}>{edu.degree}</p>
            <p style={{ fontSize: '12px', color: darkMode ? '#555' : '#999', marginBottom: '0.75rem' }}>{edu.location}</p>
            <p style={{ fontSize: '14px', color: muted, lineHeight: 1.6 }}>{edu.desc}</p>
            {edu.current && (
              <span style={{
                display: 'inline-block', marginTop: '0.75rem',
                fontSize: '11px', padding: '3px 10px',
                background: darkMode ? '#1a1a1a' : '#e8e8e8',
                borderRadius: '20px', color: muted,
              }}>Current</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Skills */}
      <section id="skills" style={{ background: bg2 }}>
        <div className="container">
          <p className="section-label">Skills</p>
          <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '2.5rem', color: text }}>Technical stack</h2>
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
                  { name: 'REST API', icon: <span style={{ fontSize: '14px' }}>⚡</span> },
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
                background: cardBg, border: `1px solid ${border}`,
                borderRadius: '12px', padding: '1.75rem', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = darkMode ? '#444' : '#bbb'}
                onMouseLeave={e => e.currentTarget.style.borderColor = border}
              >
                <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '1.25rem', color: text }}>{col.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {col.items.map(item => (
                    <li key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: muted }}>
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
      {/* CTA */}
<section id="contact" style={{ background: bg }}>
  <div className="container">
    <div style={{
      background: bg2, border: `1px solid ${border}`,
      borderRadius: '16px', padding: '3.5rem',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: '3rem', flexWrap: 'wrap',
    }}>
      <div>
        <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: darkMode ? '#555' : '#999', marginBottom: '0.75rem' }}>
          Available now
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 600, color: text, marginBottom: '0.75rem', lineHeight: 1.3 }}>
          Open to Werkstudent roles
        </h2>
        <p style={{ fontSize: '15px', color: muted, lineHeight: 1.7, marginBottom: '1.5rem' }}>
          15–20h/week · Nürnberg or remote · Starting now
        </p>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href="https://linkedin.com/in/raedmejrii" target="_blank" rel="noopener noreferrer" className="btn" style={{ textAlign: 'center' }}>LinkedIn</a>
          <a href="https://github.com/raedmejrii" target="_blank" rel="noopener noreferrer" className="btn" style={{ textAlign: 'center' }}>GitHub</a>
          <a href="/RaedMejri_CV.pdf" download className="btn" style={{ textAlign: 'center' }}>↓ CV</a>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#4ade80', fontSize: '16px', fontWeight: 500 }}>
            ✓ Message sent ! I'll get back to you soon.
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              style={{
                background: bg, border: `1px solid ${border}`,
                borderRadius: '8px', padding: '12px 16px',
                fontSize: '14px', color: text, outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              style={{
                background: bg, border: `1px solid ${border}`,
                borderRadius: '8px', padding: '12px 16px',
                fontSize: '14px', color: text, outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
            <textarea
              placeholder="Your message"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              style={{
                background: bg, border: `1px solid ${border}`,
                borderRadius: '8px', padding: '12px 16px',
                fontSize: '14px', color: text, outline: 'none',
                resize: 'none', fontFamily: 'inherit',
                transition: 'border-color 0.2s',
              }}
            />
            <button
              onClick={handleSubmit}
              disabled={sending}
              className="btn btn-primary"
              style={{ textAlign: 'center', opacity: sending ? 0.7 : 1 }}
            >
              {sending ? 'Sending...' : 'Send message'}
            </button>
          </>
        )}
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: '2rem 0', textAlign: 'center', fontSize: '13px', color: darkMode ? '#444' : '#999' }}>
        © 2026 Raed Mejri · Built with React + Vite · Deployed on Vercel
      </footer>

    </div>
  )
}

export default App