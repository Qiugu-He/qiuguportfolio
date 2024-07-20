import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
    homepage,
  } = value;

  // https://raw.githubusercontent.com/qiugu-he/Little-Lemon/master/src/assets/Sajal.png --- works
  // Relocating all the screenshot image to public folder and name it as "Screenshoot"
  const imgSrc = (name === 'Blog')? `https://raw.githubusercontent.com/qiugu-he/${name}/master/Screenshot.png`: (name === 'littlelemon')? `https://raw.githubusercontent.com/qiugu-he/${name}/main/public/Screenshot.png`: `https://raw.githubusercontent.com/qiugu-he/${name}/master/public/Screenshoot.png`;
  const title = (name === 'Blog') ? 'Blogging Platform' : (name === 'TravelApp') ? 'iTravel' : (name === 'littlelemon') ? 'Little Lemon' : name;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Img variant="top" src={imgSrc}/>
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} homepage={homepage} /> : <Skeleton count={2} />}
          <hr />
          <TechStack title={title}/>
          {/* {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )} */}
          {value ? (
            <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

//tech
const TechStack = ({title}) =>{
  var arr = [];
  switch (title){
    case "Blogging Platform":
      arr=["Reactjs", "React-router", "Node-js", "Expressjs", "Express-middleware", "MongoDB", "Jest", "Digital Ocean", "Figma", "Docker", "Nginx"];
      break;
    case "Little Lemon":
      arr=["Typescript", "React.js", "React-components", "React-hooks", "React-hoc", "React-router", "Jest", "Figma"];
      break;
    case "qiuguportfolio":
      arr=["React.js", "React-router","React-hooks", "Custom-hooks", "HOC","Jest"];
      break;
    case "ReactHome":
      arr=["React.js", "React-router","React-hooks", "Jest"];
      break;
    case "iTravel":
        arr=["Typescript", "React.js", "Ant Design4", "React-components", "React-hooks", "React-hoc", "React-router","Redux-toolkit", "Redux-store","Redux-thunk", "Figma", "Docker", "Docker image", "Nginx", "Aliyun"];
        break;
    default:
      break;
  }

  return (
    <div className="pb-3">
      Tags: {" "}
      {arr.map((t) => (
        <span className="badge bg-light text-dark">
          {t}
        </span>
        ))}
    </div>
  );
}

//CardButtons
const CardButtons = ({ svn_url, homepage }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a href={svn_url} target=" _blank" className="btn btn-outline-secondary mx-2">
         <i className="fab fa-github" /> Github
      </a>
      <a
        href={`${homepage}`}
        className="btn btn-outline-secondary mx-2"
      >
        {/* <i className="fab fa-jsfiddle" /> Live */}
        Live
      </a>
    </div>
  );
};

//Languages
const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);
  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <span className="badge bg-light text-dark">
              {language}
            </span>
        ))
        : "code yet to be deployed."}
    </div>
  );
};

//CardFooter
const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      {/* <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a> */}
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
