import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import "./styles.scss";

const CardProject = ({ name, image, linkDesing, linkWeb }) => {
  return (
    <div className="flex flex-col items-center rounded-md shadow-xl justify-center transform hover:-translate-y-2 duration-300">
      <div className="animate-banner">
        <img className="rounded-t-md" src={image} alt={name} />
        <div className="card-banner flex items-center justify-center text-indigo-50 rounded-t-md gap-5">
          <Button
            href={linkDesing}
            title="ver diseño"
            type="ghost"
            variante="secondary"
          />
          {linkWeb !== "" ? (
            <Button
              href={linkWeb}
              title="visitar sitio web"
              type="dark"
              variante="secondary"
            />
          ) : null}
        </div>
      </div>
      <p className="f-second font-bold text-fp-smaller text-c-first-darker-100 py-4">
        {name}
      </p>
    </div>
  );
};

// defined proptypes
CardProject.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  linkDesing: PropTypes.string,
  linkWeb: PropTypes.string,
};

// defined defaultprops
CardProject.defaultProps = {
  name: "name",
  image: "path image",
  linkDesing: "path design image",
  linkWeb: "path web",
};

export default CardProject;
