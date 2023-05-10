import Project from "../Project";
import { PROJECTS } from "../../data";
import "./Projects.css"

function Projects() {

  return (
    <div className="projects">
      <h2>Projects</h2>
      {PROJECTS.map((project) => (
        <Project key={project?.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
