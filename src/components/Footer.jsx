import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        {/*  <i className="fas fa-code" /> with <i className="fas fa-heart" /> */} 
        By{" "}
        {/*<a
          rel="noopener"
          href="https://linkedin.com/Qiugu-He"
          aria-label="My GitHub"
        >*/} <span className="badge bg-dark">
            Qiugu He
          </span>
        {" "}
        at 2024
      </Container>
    </footer>
  );
};

export default Footer;