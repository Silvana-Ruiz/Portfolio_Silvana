import "./Project.css"

function Project({project}) {

  const {name, description, skills} = project
  console.log(project)
  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{description}</p>
     
    </div>
  )
}

export default Project
