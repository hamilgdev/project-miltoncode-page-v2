import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const CardChallenge = ({ name, image, linkPreview, linkCode, linkFM }) => {
  return (
    <article className="shadow-inner" style={{ maxWidth: "400px" }}>
      <div className="overflow-hidden rounded-t-md">
        <img className="animation-transform" src={image} alt={name} />
      </div>
      <div className="shadow-inner bg-green-100 rounded-b-md">
        <Button title="vista previa" href={linkPreview} />
        <Button title="ver código" href={linkCode} />
        <Button title="ver en frontendmentor" href={linkFM} />
      </div>
    </article>
  );
};

// defined proptypes
CardChallenge.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  linkPreview: PropTypes.string,
  linkCode: PropTypes.string,
  linkFM: PropTypes.string,
};

// defined defaultprops
CardChallenge.defaultProps = {
  name: "Name challenge",
  image: "Path image",
  linkPreview: "Link preview",
  linkCode: "Link code",
  linkFM: "Link frontendmentor",
};

export default CardChallenge;
