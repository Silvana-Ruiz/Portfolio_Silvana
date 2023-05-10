import Project from "../Project";
import { PROJECTS } from "../../data";

function Projects() {

  return (
    <div className="navyContainer">
      <h2>Projects</h2>
      {PROJECTS.map((project) => (
        <Project key={project?.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
