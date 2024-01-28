import Projects from "../Projects";
import Experience from "../Experience";
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="container">
        <h1 className="name">Silvana Ruiz</h1>
        <div className="grid">
          <img
            className="image"
            src="/Silvana_Ruiz.jpg"
            alt="Silvana Ruiz Image"
          />

          <section className="identity">
            <div className="details">
              <p>Computer Science Student @ITESM</p>
            </div>
            <div className="details">
              <p>Microsoft Software Engineer Intern</p>
            </div>
            <div className="details">
              <p>Women-in-STEM Advocate</p>
            </div>
          </section>

          <section className="aboutme navyContainer" >
            <h2>About Me</h2>
            <p>
              Hello World! I am Software Engineer in the making, currently I am
              a junior Computer Science and Technology student graduating in
              June 2024. I am passionate about Web Development (frontend and
              backend).
              <br />
              I am looking forward to working on tech solutions that focus on
              problems that people face daily.
              <br />
              Moreover, I am a Women-in-STEM advocate and have been working in
              related projects since 2021.
            </p>
          </section>

          <section className="projects">
            <Projects />
          </section>
          <section className="experience">
            <Experience />
          </section>
          
          

        </div>
      </div>
    </>
  );
}

export default Profile;
