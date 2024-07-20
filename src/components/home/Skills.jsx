import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Table from 'react-bootstrap/Table';
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills, skillA, skillB}, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-5 pb-5 text-center">
          {heading}
        </h2>
        
        <Table borderless variant="grey" className="font-italic text-muted ">
          <thead>
            <tr>
              <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)', fontSize: '20px'}}> Programming Languages</th>
              <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)', fontSize: '20px'}}>Frameworks/Database</th>
              <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)', fontSize: '20px'}}>Services/Tools</th>
              <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)', fontSize: '20px'}}>Concepts</th>
              {/* <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)'}}>Soft Skills</th> */}
            </tr>
          </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px'}}>JavaScript/TypeScript</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>ReactJS</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Amazon Web Services</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>RESTful Web Services</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Goal Oriented</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Java</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Node/ExpressJS</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>CI/CD</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Object Oriented Programming</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Collabration</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>C#/C++</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>ASP.NET</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Docker</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Agile Methodology</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Problem Solving</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Python</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>MySQL</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>PostMan</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Data Structure & Algorithms</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Positivity</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>SQL</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>PostgreySQL</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Jenkins</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Functional Programming</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Adaptability</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>HTML/CSS</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>MongoDB</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Git/GitHub</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '18px' }}>Software Design Principles</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Creativity</td> */}
        </tr>
      </tbody>
    </Table>

        {/* <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        > 
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Programming Languages"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="skillA"
            title="Frameworks / Database"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={skillA} isScrolled={isScrolled} />
            </Row>
          </Tab> 

        <Tab
            tabClassName="skills-tab lead"
            eventKey="skillB"
            title="Services / Tools"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={skillB} isScrolled={isScrolled} />
            </Row>
          </Tab> 

          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>

        </Tabs> */}
      </Container>
    </Jumbotron>
  );
});

export default Skills;
