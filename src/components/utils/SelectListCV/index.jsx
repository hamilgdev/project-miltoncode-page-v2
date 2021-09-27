import React, { useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";

import CV from "../../../assets/files/CV_Hamilton_G_Moreno_compressed.pdf";
import CV_EN from "../../../assets/files/CV_Hamilton_G_Moreno_EN_compressed.pdf";

const SelectListCV = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        name="select"
        className="relative flex items-center justify-center focus:outline-none px-4 h-12 bg-c-accent-darker text-c-second-main rounded-b-md sm:rounded-br-none sm:rounded-bl-none sm:rounded-t-md sm:transition-transform sm:transform sm:hover:scale-y-110 sm:duration-300"
        onClick={handleOpen}
      >
        <span className="font-bold">Descargar CV</span>
        <span className="ml-2 text-fp-xlarge">
          <RiArrowDropDownLine
            className={`${open && "transform rotate-180"}`}
          />
        </span>

        {open && (
          <ul className="absolute left-0 inset-y-full | w-full h-full |">
            <li className="py-1 bg-c-accent-darker">
              <a
                href={CV}
                download="CV_Hamilton_G_Moreno_compressed"
                rel="noopener noreferrer"
                className="f-first text-fp-small hover:text-c-first-main"
                onClick={handleClose}
              >
                CV_ES
              </a>
            </li>
            <li className="py-1 bg-c-accent-darker">
              <a
                href={CV_EN}
                download="CV_Hamilton_G_Moreno_EN_compressed"
                rel="noopener noreferrer"
                className="f-first text-fp-small hover:text-c-first-main"
                onClick={handleClose}
              >
                CV_EN
              </a>
            </li>
          </ul>
        )}
      </button>
    </>
  );
};

export default SelectListCV;
