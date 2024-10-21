export default function Contact() {
  return (
    <>
      <section id="contact" className="contact--container">
        <h2 className="contact--title">Contact Me</h2>
        <div className="contact--content">
          <p className="contact--cta">
            I’m always open to discussing new projects or opportunities. Feel
            free to drop me a message!
          </p>
          <div className="social--links">
            <a
              href="https://www.linkedin.com/in/bryan-khor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/ja_crispy7__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://github.com/bryankhor07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </section>
      <div className="footer">
        <p>&copy; 2024 Bryan Khor. All rights reserved.</p>
      </div>
    </>
  );
}
