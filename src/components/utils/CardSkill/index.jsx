import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const CardSkill = ({ name, icon, reducer }) => {
  const [animate, setAnimate] = useState("");

  /**
   * @description Determines a random value to apply the animation, after a delay of 1 sec, they are applied to the other elements
   */
  const animationRandom = () => {
    const animate = Math.floor(Math.random() * 2);
    return animate === 1
      ? setAnimate("animate-scale")
      : setTimeout(() => {
          setAnimate("animate-scale");
        }, 1000);
  };

  useEffect(() => {
    animationRandom();
  }, []);

  return (
    <div
      className={`${animate} w-16 h-16 flex items-center shadow-md justify-center rounded-md`}
    >
      <img className={`${reducer ? "w-8" : "w-12"}`} src={icon} alt={name} />
    </div>
  );
};

// defined proptypes
CardSkill.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  reducer: PropTypes.bool,
};

// defined defaultprops
CardSkill.defaultProps = {
  name: "name icon",
  icon: "path icon",
  reducer: false,
};

export default CardSkill;
