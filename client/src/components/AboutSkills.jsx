import { profile, skills } from "../data/portfolio";

const skillMarks = {
  code: "</>",
  palette: "#",
  javascript: "JS",
  bootstrap: "B",
  wind: "TW",
  react: "⚛",
  route: "↗",
  redux: "R",
  api: "{ }",
  git: "⑂",
  responsive: "▭",
  vite: "V",
};

export function About() {
  return (
    <section id="about" className="section about-section">
      <p className="section-kicker">A little about me</p>
      <h2>About Me</h2>
      <div className="about-copy">
        <p>{profile.about}</p>
        <p>I work with HTML, CSS, JavaScript and React to build responsive websites and interactive applications. Through hands-on projects, I've practised component-based development, routing, state management, API integration, DOM manipulation and responsive UI design.</p>
        <p>I enjoy learning by building, improving my problem-solving skills and exploring how modern web technologies can be used to create useful digital products. I'm currently strengthening my frontend skills while growing towards full-stack development and AI-powered web applications.</p>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <p className="section-kicker">Tools I work with</p>
      <h2>Skills &amp; Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span className={`skill-icon skill-icon-${skill.icon}`} aria-hidden="true">
              {skillMarks[skill.icon] ?? skill.name.slice(0, 2)}
            </span>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
