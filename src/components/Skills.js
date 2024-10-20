export default function Skills() {
  return (
    <section id="skills" className="skills--container">
      <h2 className="skills--title">My Skills</h2>
      <div className="skills--content">
        <div className="skills--list">
          <h3>Frontend</h3>
          <ul>
            <li>
              <i className="fab fa-html5"></i> HTML
            </li>
            <li>
              <i className="fab fa-css3-alt"></i> CSS
            </li>
            <li>
              <i className="fab fa-js"></i> JavaScript
            </li>
            <li>
              <i className="fab fa-react"></i> React
            </li>
            <li>
              <i className="fab fa-bootstrap"></i> Bootstrap
            </li>
          </ul>
        </div>
        <div className="skills--list">
          <h3>Backend</h3>
          <ul>
            <li>
              <i className="fab fa-node-js"></i> Node.js
            </li>
            <li>
              <i className="fas fa-server"></i> Express
            </li>
            <li>
              <i className="fas fa-database"></i> MongoDB
            </li>
            <li>
              <i className="fas fa-database"></i> SQL
            </li>
            <li>
              <i className="fas fa-link"></i> RESTful APIs
            </li>
          </ul>
        </div>
        <div className="skills--list">
          <h3>Tools</h3>
          <ul>
            <li>
              <i className="fab fa-git"></i> Git
            </li>
            <li>
              <i className="fab fa-github"></i> GitHub
            </li>
            <li>
              <i className="fas fa-code"></i> VS Code
            </li>
            <li>
              <i className="fab fa-figma"></i> Figma
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
