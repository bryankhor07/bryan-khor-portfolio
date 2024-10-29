import TenziesPhoto from "../images/TenziesApp.png";
import WeatherAppPhoto from "../images/WeatherAppPhoto.png";

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
            className="project--container"
          >
            <img src={TenziesPhoto} alt="Tenzies" className="project--photo" />
            <div className="overlay--text">
              A fun dice-rolling game where the goal is to match all the dice to
              the same number. Built with React for an interactive and
              responsive experience.
            </div>
          </a>
          <h3>Tenzies: Game for Kids</h3>
        </div>
        <div className="projects--list">
          <a
            href="https://easy-to-use-weatherapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project--container"
          >
            <img
              src={WeatherAppPhoto}
              alt="Weather App"
              className="project--photo"
            />
            <div className="overlay--text">
              A weather app that displays the current weather, temperature, and
              humidity for a specific city. Created with React and styled with
              CSS for a clean and modern design.
            </div>
          </a>
          <h3>Weather App: A site for everyone</h3>
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
