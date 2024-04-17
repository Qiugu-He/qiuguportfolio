import React from "react";

const GetInTouch = ({ heading, message, email, icons }) => {
  return (
    <>
      <h2 className="display-4 text-center">{heading}</h2>
      <p className="lead text-center">
        {message} <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
      <div className="pb-3">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons2`} />
              </a>
            ))}
          </div>
    </>
  );
};

export default GetInTouch;
