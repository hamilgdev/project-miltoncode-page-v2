import React from "react";
import PropTypes from "prop-types";

import { FaCodepen } from "react-icons/fa";

const EmbedPen = ({ title, srcPen }) => {
  return (
    <div className="flex-1" style={{ height: "360px" }}>
      <div className="rounded-t-md text-left bg-yellow-100">
        <small className="inline-flex items-center gap-2 f-first text-fp-smaller px-3 py-1">
          <FaCodepen /> {title}
        </small>
      </div>
      <iframe
        allowFullScreen={true}
        allowpaymentrequest="true"
        allowtransparency="true"
        frameBorder="0"
        loading="lazy"
        scrolling="no"
        height="360px"
        width="100%"
        title={title}
        src={srcPen}
        className="rounded-b-md"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "block",
        }}
      >
        See the Pen{" "}
        <a href="https://codepen.io/miltoncodeyt/pen/yLOOjPP">{title}</a> by
        Hamilton G. (<a href="https://codepen.io/miltoncodeyt">@miltoncodeyt</a>
        ) on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
};

// defined proptypes
EmbedPen.propTypes = {
  title: PropTypes.string,
  srcPen: PropTypes.string,
};

// defined defaultprops
EmbedPen.defaultProps = {
  title: "Name codepen",
  srcPen: "Path codepen",
};

export default EmbedPen;
