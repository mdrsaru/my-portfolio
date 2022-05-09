import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import ProjectList from "./ProjectList";
import saru from "../image/image/saru.jpg";

import { Row, Col, Button } from "react-bootstrap";

import "../style/style.css";
import Skill from "./Skill";

const Portfolio = () => {
  const [personalDetail, setPersonalDetail] = useState({
    name: "Saru Manandhar",
    address: "Bhaktapur",
    phone: "9863039430",
  });
  const [project, setProject] = useState([]);
  const [show, setShow] = useState(false);
  const getProject = () => {
    setShow(!show);
    setProject([
      {
        id: 1,
        projectName: "PersonalInfo",
        Link: "https://gitlab.com/sarumdr123/react-displayinfo",
      },

      {
        id: 2,
        projectName: "CounterApp",
        Link: "https://gitlab.com/sarumdr123/react-counterapp",
      },
      {
        id: 3,
        projectName: "TodoApp",
        Link: "https://gitlab.com/sarumdr123/react-todoapp",
      },

      {
        id: 4,
        projectName: "FetchingApp",
        Link: "https://gitlab.com/sarumdr123/fetchingapp",
      },
    ]);
  };

  const skills = ["HTML", "CSS", "Nodejs", "ReactJs", "NextJs"];
  console.log(project);
  return (
    <div className={"mainContainer"}>
      <Row>
        <Col lg={4}>
          <img className="image" src={saru} />
        </Col>
        <Col lg={8}>
          <PersonalInformation personalDetail={personalDetail} />
          <Button onClick={getProject} className={'btn'}>Click me</Button>
          {show && <ProjectList project={project} />}
        </Col>
      </Row>
      <Row style={{marginLeft:'5%'}}>
      {skills.map((skill, index) => (
        
        
             <Col lg = {1} key ={index} >
          <Skill skill={skill} />
          </Col>
      ))}
      </Row>
    </div>
  );
};

export default Portfolio;
