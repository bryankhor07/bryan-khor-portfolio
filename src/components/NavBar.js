import Logo from "../images/Portfolio Logo.webp";

export default function NavBar() {
  return (
    <nav className="nav--container">
      <ul className="nav--list">
        <li className="nav--logo">
          <img src={Logo} className="portfolio--logo" alt="Portfolio Logo" />
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="hire--me">
          <a
            href="https://www.linkedin.com/in/bryan-khor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
