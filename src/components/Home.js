import BryanPic from "../images/BryanProfilePic.png";
import BryanResume from "../Bryan's Official Resume.pdf";

export default function Home() {
  return (
    <section id="home" className="home--container">
      <div className="home--content">
        <h1 className="home--title">Hi, I'm Bryan Khor</h1>
        <p className="home--description">
          I'm a software developer based in Redwood City. I specialize in
          building websites and applications that are fast, accessible, and
          responsive.
        </p>
        <div className="home--links">
          <a
            className="home--hire--me"
            href="https://www.linkedin.com/in/bryan-khor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
          <a href={BryanResume} className="home--resume" download>
            <button className="resume--button">
              Resume <i className="fas fa-download"></i>
            </button>
          </a>
        </div>
        <div className="home--icons">
          <a
            href="https://github.com/bryankhor07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-khor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="home--image">
        <img src={BryanPic} alt="Bryan" />
      </div>
    </section>
  );
}
