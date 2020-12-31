import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import IsotipoNegativo from "../../../assets/svg/isotipo-negativo.svg";
import IsotipoPositivo from "../../../assets/svg/isotipo-positivo.svg";

const Logotipo = ({ version, mStyles }) => {
  return (
    <div className={`w-5 lg:w-7 animation-transform ${mStyles}`}>
      <Link to="/">
        <img
          src={version === "negativo" ? IsotipoNegativo : IsotipoPositivo}
          alt="Logotipo Milton Code"
        />
      </Link>
    </div>
  );
};

// defined proptypes
Logotipo.propTypes = {
  version: PropTypes.string,
  mStyles: PropTypes.string,
};

// defined defaultprops
Logotipo.defaultProps = {
  version: "negativo",
  mStyles: "",
};

export default Logotipo;
