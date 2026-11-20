import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <p className="section-kicker">Selected work</p>
      <h2>My Projects</h2>
      <p className="section-intro">A selection of websites and applications I've built while learning and practising web development.</p>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <img src={`/${encodeURI(p.image)}`} alt={`${p.title} Project`} />
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live Demo</a>}
                <a href={p.code} target="_blank" rel="noreferrer">Source Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <a className="github-button" href="https://github.com/jahangir2k25" target="_blank" rel="noreferrer">View More on GitHub</a>
    </section>
  );
}
