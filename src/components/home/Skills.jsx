import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
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
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        > 
        {/*   Programming Languages*/ }
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Programming Languages"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        {/*   Frameworks */ }
          <Tab
            tabClassName="skills-tab lead"
            eventKey="skillA"
            title="Frameworks / Database"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={skillA} isScrolled={isScrolled} />
            </Row>
          </Tab> 

        {/*   Tools */ }
        <Tab
            tabClassName="skills-tab lead"
            eventKey="skillB"
            title="Services / Tools"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={skillB} isScrolled={isScrolled} />
            </Row>
          </Tab> 

        {/*   soft skills */ }
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>

        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
