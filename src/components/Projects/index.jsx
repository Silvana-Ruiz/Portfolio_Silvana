import Project from "../Project";
import { PROJECTS } from "../../data";
import { generateIds } from "../../utilities/utility";

function Projects() {
  generateIds();
  return (
    <div className="navyContainer">
      <h2>Projects</h2>
      {PROJECTS.slice()
        .reverse()
        .map((project) => (
          <Project key={project?.id} project={project} />
        ))}
    </div>
  );
}

export default Projects;
