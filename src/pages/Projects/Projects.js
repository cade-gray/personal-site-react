import {useState, useEffect} from "react";
import "./Projects.css";
import Project from "../../components/Project/Project";


const Projects = () => {
   const [myProjects, setMyProjects] = useState([{projectName: "Loading", projectDescription: "Loading"},{projectName: "Loading", projectDescription: "Loading"},{projectName: "Loading", projectDescription: "Loading"} ]);

  useEffect(() => {
    fetch('https://api.cadegray.dev/projects')
      .then(response => response.json())
      .then(data => setMyProjects(data))
      .catch(error => console.error('Error fetching data:', error))
  }, []);
  return (
    <div className="projects-container">
      <div className="project-list-container">
        {myProjects.map((proj) => (
          <Project
            imgURL={[proj.projectImg]}
            projName={proj.projectName}
            githubLink={proj.projectRepo}
            projDesc={proj.projectDescription}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
