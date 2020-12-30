import React from "react";
import PropTypes from "prop-types";

const CardVideoclip = ({ video, poster, name, linkPen }) => {
  return (
    <article style={{ maxWidth: "392px" }}>
      <video poster={poster} controls>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="flex justify-between items-center">
        <small className="f-first text-fp-smaller py-1 px-2 bg-c-second-lighter-100 rounded-b-sm">
          {name}
        </small>
        <a
          className="f-first text-fp-smaller py-1 px-2 bg-c-first-lighter-100 hover:bg-c-first-main duration-300 rounded-b-sm"
          href={linkPen}
          target="_blank"
          rel="noopener noreferrer"
        >
          vista previa 👀
        </a>
      </div>
    </article>
  );
};

// defined proptypes
CardVideoclip.propTypes = {
  video: PropTypes.string,
  poster: PropTypes.string,
  name: PropTypes.string,
  linkPen: PropTypes.string,
};

// defined defaultprops
CardVideoclip.defaultProps = {
  video: "Path video",
  poster: "Path poster",
  name: "name videoclip",
  linkPen: "link pen",
};

export default CardVideoclip;
