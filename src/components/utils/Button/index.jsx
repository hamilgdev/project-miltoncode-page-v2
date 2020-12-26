import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, href, type, variante, icon }) => {
  /**
   * @description Determines the corresponding value in the accessories, to create the button
   */
  const handleTypeButton = () => {
    if (type === "ghost") {
      if (variante === "primary")
        return "border-2 border-c-first-main text-c-first-main";
      if (variante === "secondary")
        return "border-2 border-c-second-main text-c-second-main";
    } else if (type === "dark") {
      if (variante === "primary") return "bg-c-first-main text-c-accent-darker";
      if (variante === "secondary")
        return "bg-c-second-main text-c-accent-darker";
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${handleTypeButton()} inline-block uppercase f-first text-fp-small px-3 py-1 rounded-md animation-transform`}
    >
      {icon === null ? (
        title
      ) : (
        <span className="flex items-center gap-2">
          <i className="text-fp-base">{icon}</i>
          {title}
        </span>
      )}
    </a>
  );
};

// defined proptypes
Button.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
  variante: PropTypes.string,
  icon: PropTypes.object,
};

// defined defaultprops
Button.defaultProps = {
  title: "name button",
  href: "#",
  type: "dafult",
  variante: "text-c-accent-lighter bg-c-first-darker-100-50",
  icon: null,
};

export default Button;
