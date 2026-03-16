import './index.css'

function App() {
  return (
    <>
      <nav style={{ borderBottom: '1px solid #eee', padding: '1.2rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 500, fontSize: '15px' }}>Raed</span>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '14px', color: '#555' }}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <p className="section-label">Software Engineer · Nürnberg, Germany</p>
          <h1 style={{ fontSize: '48px', fontWeight: 600, lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '640px' }}>
            I build — front to back.
          </h1>
          <p style={{ fontSize: '18px', color: '#555', maxWidth: '520px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Full-stack developer. M.Sc. candidate in Computer Science. React, Node.js, and cloud infrastructure — end to end.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#experience" className="btn btn-primary">View projects</a>
            <a href="#contact" className="btn">Get in touch</a>
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
              },
              {
                title: 'DevOps Pipeline',
                desc: 'Automated CI/CD pipeline from scratch. Containerised services, configured reverse proxy, and set up automated testing and deployment.',
                stack: ['Docker', 'GitHub Actions', 'Nginx', 'Linux'],
              },
              {
                title: 'Frontend UI System',
                desc: 'Modular component library with reusable UI elements. Focused on performance, accessibility, and design consistency.',
                stack: ['React', 'CSS Modules', 'Figma'],
              },
            ].map(project => (
              <div key={project.title} style={{ border: '1px solid #eee', borderRadius: '10px', padding: '1.5rem 2rem' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ fontSize: '14px', color: '#555', marginBottom: '1rem', lineHeight: 1.7 }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.stack.map(tag => (
                    <span key={tag} style={{ fontSize: '12px', padding: '3px 10px', background: '#f0f0f0', borderRadius: '4px', color: '#333' }}>{tag}</span>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { title: 'Frontend', items: ['React / JSX', 'HTML5 · CSS3', 'Responsive design', 'Figma (basics)'] },
              { title: 'Backend & APIs', items: ['Node.js · Express', 'REST API design', 'PostgreSQL · SQL', 'Authentication (JWT)'] },
              { title: 'DevOps & Cloud', items: ['Docker · Compose', 'GitHub Actions', 'Linux · Bash', 'Nginx · VPS'] },
            ].map(col => (
              <div key={col.title}>
                <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '1rem' }}>{col.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {col.items.map(item => (
                    <li key={item} style={{ fontSize: '14px', color: '#555' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact">
        <div className="container" style={{ maxWidth: '560px' }}>
          <p className="section-label">Contact</p>
          <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '1rem' }}>Open to Werkstudent roles</h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '2rem' }}>
            Currently pursuing my Master's in Computer Science. Available for a working student position (15–20h/week) starting now. Based in Nürnberg, open to remote.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:raedmjr00@gmail.com" className="btn btn-primary">Send me a message</a>
            <a href="https://www.linkedin.com/in/raed-mejri/" className="btn">LinkedIn</a>
            <a href="https://github.com/raedmejrii" className="btn">GitHub</a>
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