import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaClone } from "react-icons/fa";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";

const CardImageGuide = ({ id, title, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visualImages, setVisualImages] = useState([]);
  const [tagCollectionImg, setTagCollectionImg] = useState(0);

  const options = {
    index: 0,
    bgOpacity: 0.9,
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  /**
   * Event handler for Card PhotoSwipe index detection
   * @param {number} index
   */
  const handleLoopPhotoSWipe = (index) => () => {
    // Temporary variable, where the array of [image] is stored
    const countImage = [];
    // Go through [image] and load the values to the temporary variable
    image.map((img) =>
      countImage.push({
        src: img,
        w: 1200,
        h: 1200,
        title: title,
      })
    );
    // Update state - hook
    setVisualImages(countImage);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (image.length > 1) setTagCollectionImg(image.length);
  }, [image]);

  return (
    <>
      <article
        className="relative rounded-md cursor-zoom-in shadow-xl transform hover:-translate-y-2 duration-300"
        onClick={handleLoopPhotoSWipe(id)}
      >
        <img className="rounded-md" src={image[0]} alt={title} />
        {tagCollectionImg > 1 ? (
          <span className="absolute top-2 right-2 | inline-flex gap-2 items-center | py-1 px-2 | f-first text-fp-smaller bg-c-first-darker-100 text-c-accent-lighter rounded-md">
            <FaClone />
            <small>1/{tagCollectionImg}</small>
          </span>
        ) : null}
      </article>
      {isOpen ? (
        <PhotoSwipe
          isOpen={isOpen}
          items={visualImages}
          options={options}
          onClose={handleClose}
        />
      ) : null}
    </>
  );
};

// defined proptypes
CardImageGuide.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.array,
};

// defined defaultprops
CardImageGuide.defaultProps = {
  id: 0,
  title: "Title guide visual",
};

export default CardImageGuide;
