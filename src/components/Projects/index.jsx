import Project from "../Project";
import { PROJECTS } from "../../data";

function Projects() {

  return (
    <main>
      <h2>Projects</h2>
      {PROJECTS.map((project) => (
        <Project key={project?.id} project={project} />
      ))}
    </main>
  );
}

export default Projects;
