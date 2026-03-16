import './index.css'

function App() {
  return (
    <>
    <nav style={{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  background: 'rgba(255,255,255,0.92)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid #eee',
  padding: '1.1rem 0',
}}>
  <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span style={{ fontWeight: 600, fontSize: '15px' }}>Raed Mejri</span>
    <div style={{ display: 'flex', gap: '2rem', fontSize: '14px', color: '#555' }}>
      <a href="#about" style={{ transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color='#000')} onMouseLeave={e => (e.currentTarget.style.color='#555')}>About</a>
      <a href="#experience" style={{ transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color='#000')} onMouseLeave={e => (e.currentTarget.style.color='#555')}>Projects</a>
      <a href="#skills" style={{ transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color='#000')} onMouseLeave={e => (e.currentTarget.style.color='#555')}>Skills</a>
      <a href="#contact" style={{ transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color='#000')} onMouseLeave={e => (e.currentTarget.style.color='#555')}>Contact</a>
    </div>
  </div>
</nav>

  {/* Hero */}
<section id="hero" style={{ paddingTop: '140px', paddingBottom: '120px' }}>
  <div className="container">
    <div style={{
      display: 'inline-block',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#555',
      border: '1px solid #ddd',
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
    }}>
      I build —<br />
      <span style={{ color: '#888' }}>front to back.</span>
    </h1>
    <p style={{
      fontSize: '18px',
      color: '#555',
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
      borderTop: '1px solid #eee',
    }}>
      {[
        { num: '3+', label: 'Years of experience' },
        { num: 'React · Node · Docker', label: 'Core stack' },
        { num: 'FR · DE · EN', label: 'Languages' },
      ].map(stat => (
        <div key={stat.label}>
          <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '3px' }}>{stat.num}</p>
          <p style={{ fontSize: '12px', color: '#888' }}>{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* About */}
      <section id="about" style={{ background: '#f9f9f9' }}>
        <div className="container">
          <p className="section-label">About</p>
          <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '1.5rem' }}>The engineer behind the stack</h2>
          <p style={{ fontSize: '16px', color: '#444', maxWidth: '600px', lineHeight: 1.8, marginBottom: '1rem' }}>
            From Tunisia to Germany — three cities, three universities, one consistent thread: building software that works end to end. I design interfaces, architect APIs, and deploy infrastructure.
          </p>
          <p style={{ fontSize: '16px', color: '#444', maxWidth: '600px', lineHeight: 1.8 }}>
            I don't wait for the ops team or the design team — when I take on a task, I own it from the first commit to the live environment.
          </p>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem' }}>
            {[
              { label: 'Degree', value: 'B.Sc. IT Networks & Software' },
              { label: 'Currently', value: 'M.Sc. Computer Science' },
              { label: 'Languages', value: 'FR · DE · EN' },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ fontSize: '14px', fontWeight: 500 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
<section id="experience">
  <div className="container">
    <p className="section-label">Projects</p>
    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '2.5rem' }}>What I've built</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {[
        {
          title: 'Full-Stack Web App',
          desc: 'Complete web application with authentication, data management, and responsive UI. Handled everything from database schema to deployment.',
          stack: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
          link: 'https://github.com/raedmejrii',
        },
        {
          title: 'DevOps Pipeline',
          desc: 'Automated CI/CD pipeline from scratch. Containerised services, configured reverse proxy, and set up automated testing and deployment.',
          stack: ['Docker', 'GitHub Actions', 'Nginx', 'Linux'],
          link: 'https://github.com/raedmejrii',
        },
        {
          title: 'Frontend UI System',
          desc: 'Modular component library with reusable UI elements. Focused on performance, accessibility, and design consistency.',
          stack: ['React', 'CSS Modules', 'Figma'],
          link: 'https://github.com/raedmejrii',
        },
      ].map(project => (
        <div key={project.title} style={{
          border: '1px solid #eee',
          borderRadius: '12px',
          padding: '1.75rem 2rem',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          cursor: 'default',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#ccc'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#eee'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 600 }}>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
              fontSize: '13px',
              color: '#888',
              border: '1px solid #eee',
              borderRadius: '6px',
              padding: '4px 12px',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#1a1a1a'
                e.currentTarget.style.color = '#1a1a1a'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#eee'
                e.currentTarget.style.color = '#888'
              }}
            >
              GitHub →
            </a>
          </div>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '1.25rem', lineHeight: 1.7 }}>{project.desc}</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.stack.map(tag => (
              <span key={tag} style={{
                fontSize: '12px',
                padding: '3px 10px',
                background: '#f5f5f5',
                borderRadius: '4px',
                color: '#444',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Skills */}
<section id="skills" style={{ background: '#f9f9f9' }}>
  <div className="container">
    <p className="section-label">Skills</p>
    <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '2.5rem' }}>Technical stack</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
      {[
        {
          title: 'Frontend',
          icon: '▲',
          items: ['React / JSX', 'HTML5 · CSS3', 'Responsive design', 'Figma (basics)'],
        },
        {
          title: 'Backend & APIs',
          icon: '◆',
          items: ['Node.js · Express', 'REST API design', 'PostgreSQL · SQL', 'Authentication (JWT)'],
        },
        {
          title: 'DevOps & Cloud',
          icon: '●',
          items: ['Docker · Compose', 'GitHub Actions', 'Linux · Bash', 'Nginx · VPS'],
        },
      ].map(col => (
        <div key={col.title} style={{
          background: '#ffffff',
          border: '1px solid #eee',
          borderRadius: '12px',
          padding: '1.75rem',
        }}>
          <div style={{ fontSize: '18px', marginBottom: '0.75rem' }}>{col.icon}</div>
          <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '1.25rem' }}>{col.title}</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {col.items.map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#555' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1a1a1a', flexShrink: 0 }}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
<section id="contact" style={{ background: '#f9f9f9' }}>
  <div className="container">
    <div style={{
      background: '#1a1a1a',
      borderRadius: '16px',
      padding: '3.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
    }}>
      <div>
        <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
          Available now
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
          Open to Werkstudent roles
        </h2>
        <p style={{ fontSize: '15px', color: '#aaa', maxWidth: '420px', lineHeight: 1.7 }}>
          15–20h/week · Nürnberg or remote · Starting now
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '180px' }}>
        <a href="mailto:ton@email.com" style={{
          background: '#ffffff',
          color: '#1a1a1a',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          textAlign: 'center',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#f0f0f0'}
          onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
        >
          Send me a message
        </a>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href="https://linkedin.com/in/raedmejrii" target="_blank" rel="noopener noreferrer" style={{
            flex: 1,
            border: '1px solid #333',
            color: '#aaa',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            textAlign: 'center',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#aaa' }}
          >
            LinkedIn
          </a>
          <a href="https://github.com/raedmejrii" target="_blank" rel="noopener noreferrer" style={{
            flex: 1,
            border: '1px solid #333',
            color: '#aaa',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            textAlign: 'center',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#aaa' }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      <footer style={{ borderTop: '1px solid #eee', padding: '2rem 0', textAlign: 'center', fontSize: '13px', color: '#999' }}>
        © 2026 Raed · Built with React + Vite · Deployed on Vercel
      </footer>
    </>
  )
}

export default App