import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import PortfolioImg from "../assets/img.png";

export default function Hero() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const roles = [
      "Frontend Developer",
      "React.js Developer",
      "JavaScript Developer",
      "Creative IT Institute Student",
      "Web Developer",
      "MERN Stack Developer",
      "Full Stack Developer",
      "One year internship experience in web development",
    ];
    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const currentRole = roles[wordIndex];

      if (!deleting) {
        characterIndex += 1;
        setRole(currentRole.slice(0, characterIndex));
        if (characterIndex === currentRole.length) {
          deleting = true;
          timer = setTimeout(type, 1400);
          return;
        }
        timer = setTimeout(type, 45);
        return;
      }

      characterIndex -= 1;
      setRole(currentRole.slice(0, characterIndex));
      if (characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % roles.length;
        timer = setTimeout(type, 300);
        return;
      }
      timer = setTimeout(type, 25);
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Hello, welcome to my portfolio</p>
          <h1>Hi, I'm <span className="accent">{profile.name}</span></h1>
          <p className="typed-role">
            {role}<span aria-hidden="true">|</span>
          </p>
          <p className="hero-text">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Explore My Work <span aria-hidden="true">→</span></a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <img className="hero-photo" src={PortfolioImg} alt={profile.name} />
      </div>
    </section>
  );
}
