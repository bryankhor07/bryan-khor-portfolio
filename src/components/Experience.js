export default function Experience() {
  return (
    <section id="experience" className="experience--container">
      <h2 className="experience--title">My Experiences</h2>
      <div className="experience--content">
        <div className="experience--detail">
          <h3 className="experience--position">Software Engineer Intern</h3>
          <p className="experience--company">CodeDay Labs</p>
          <p className="experience--dates">June 2024 - August 2024</p>
          <p className="experience--description">
            During my internship at CodeDay Labs, I collaborated with a team of
            three and received mentorship from a software engineer to contribute
            to Oppia, an open-source education platform designed to facilitate
            the creation and sharing of interactive learning activities. My
            contributions included fixing a frontend bug using Angular, HTML,
            and CSS, which enabled users to click the restart button regardless
            of the state of the mobile navigation bar. Additionally, I faced the
            challenge of using Docker to build the Oppia server, which required
            extensive research and multiple attempts to resolve the encountered
            errors.
          </p>
          <p>Angular | HTML | CSS </p>
        </div>
        <div className="experience--detail">
          <h3 className="experience--position">Software Engineer Intern</h3>
          <p className="experience--company">CodeDay Labs</p>
          <p className="experience--dates">September 2023 - October 2023</p>
          <p className="experience--description">
            During my internship at CodeDay Labs, I contributed to TimeSketch, a
            project utilized by security analysts, incident responders, and
            forensic investigators. My primary responsibility involved
            implementing hover tooltips for icons within a Vue.js codebase,
            utilizing lifecycle hooks and directives to dynamically display
            descriptions.
          </p>
          <p>Vue.js | HTML</p>
        </div>
        <div className="experience--detail">
          <h3 className="experience--position">Software Lab Instructor</h3>
          <p className="experience--company">San Francisco State University</p>
          <p className="experience--dates">January 2022 - December 2022</p>
          <p className="experience--description">
            As a CSC211 Software Lab Instructor from January 2022 to December
            2022, I introduced lab assignments to 120 students and facilitated
            short lectures in Java related to the labs. I provided targeted
            assistance to students during lab sessions, which significantly
            enhanced their understanding and performance, resulting in a 15%
            improvement in average assignment scores over the semester.
          </p>
          <p>Java | Collaboration | Tutoring | Classroom Based Teaching</p>
        </div>
      </div>
    </section>
  );
}
