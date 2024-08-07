import React from 'react';

import {
  Col,
} from "react-bootstrap";

const imageSize = {
  width: '30%', 
  height: '30%', 
};

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="12">
      <div className="pb-5 text-center">
        <img style={imageSize} src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
          <br />
        </p>
        <p className="font-italic text-muted">{data.skill}</p>
      </div>
    </Col>
  );
}

export default ExperienceCard;