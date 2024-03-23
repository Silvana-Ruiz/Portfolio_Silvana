import "./Project.css";

function Project({ project }) {
  const { name, date, description, skills, link } = project;
  console.log(project);
  return (
    <div className="project">
      <div className='projectHeader'>
        <h3>
          {name} <span className="date">{date}</span>
        </h3>
        <a href={link} className="projectLink">
          See project
        </a>
      </div>

      <p>{description}</p>

      <div className="skills">
        {skills.map((skill) => (
          <span className="skill">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Project;
