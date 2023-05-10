import "./Project.css"

function Project({project}) {

  const {name, date, description, skills} = project
  console.log(project)
  return (
    <div className="project">
      <h3>{name} <span>{date}</span></h3>
      <p>{description}</p>
      <div className="skills">
        {skills.map((skill) => (
          <span className="skill">{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default Project
