import TenziesPhoto from "../images/TenziesApp.png";

export default function Projects() {
  return (
    <section id="projects" className="projects--container">
      <h2 className="projects--title">My Projects</h2>
      <div className="projects--content">
        <div className="projects--list">
          <a
            href="https://tenziesgameforkids123.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="tenzies--container"
          >
            <img src={TenziesPhoto} alt="Tenzies" className="tenzies--photo" />
            <div className="overlay--text">
              A fun dice-rolling game where the goal is to match all the dice to
              the same number. Built with React for an interactive and
              responsive experience.
            </div>
          </a>
          <h3>Tenzies: Game for Kids</h3>
        </div>
        <div className="projects--list">
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar, nisl ac tincidunt tincidunt, sapi
          </p>
        </div>
        <div className="projects--list">
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar, nisl ac tincidunt tincidunt, sapi
          </p>
        </div>
        <div className="projects--list">
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar, nisl ac tincidunt tincidunt, sapi
          </p>
        </div>
        <div className="projects--list">
          <h3>Project 5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar, nisl ac tincidunt tincidunt, sapi
          </p>
        </div>
        <div className="projects--list">
          <h3>Project 6</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar, nisl ac tincidunt tincidunt, sapi
          </p>
        </div>
      </div>
    </section>
  );
}
