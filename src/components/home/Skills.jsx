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
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>

        <Table borderless variant="grey">
          <thead>
            <tr>
              <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)'}}>Languages</th>
              <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)'}}>Frameworks/Database</th>
              <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)'}}>Services/Tools</th>
              <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)'}}>Concepts</th>
              {/* <th style={{ textAlign: 'center', fontWeight: 'normal', color: 'rgb(37, 117, 245)'}}>Soft Skills</th> */}
            </tr>
          </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px'}}>JavaScript/TypeScript</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>ReactJS</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Amazon Web Services</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>RESTful Web Services</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Goal Oriented</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Java</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Node/ExpressJS</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>CI/CD</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Object Oriented Programming</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Collabration</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>C#/C++</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>ASP.NET</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Docker</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Agile Methodology</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Problem Solving</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Python</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>MySQL</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>PostMan</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Data Structure & Algorithms</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Positivity</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>SQL</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>PostgreySQL</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Jenkins</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Functional Programming</td>
          {/* <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Adaptability</td> */}
        </tr>
        <tr>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>HTML/CSS</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>MongoDB</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Git/GitHub</td>
          <td style={{ textAlign: 'center', fontFamily: 'Helvetica Neue', fontSize: '20px' }}>Software Design Principles</td>
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
