import { PROJECTS } from "../data";

export function generateIds() {
  let id = 0;
  PROJECTS.forEach((project) => {
    project.id = id;
    id += 1;
  });
}
