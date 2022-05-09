import React, { Component } from "react";

import '../style/style.css'
const ProjectList = (props) => {

  let ProjectList = props.project.map((project) => {
    return (
      <div className={"list"}>
        <li key={project.id} className={"projectname"}>
          <p>{project.projectName}</p>
          <a href={project.Link} target="_blank" className={"projectlink"}>
            {project.Link}
          </a>
        </li>
      </div>
    );
    // console.log(ProjectList)
  });
  return <div>{ProjectList}</div>;

};

export default ProjectList;
