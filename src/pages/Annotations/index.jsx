import React from "react";
import CardChallenge from "../../components/utils/CardChallenge";
import CardVideoclip from "../../components/utils/CardVideoclip";
import EmbedPen from "../../components/utils/EmbedPen";
import AnnotationsData from "../../data/AnnotationsData";

const Annotations = () => {
  // data destructuring
  const {
    title,
    subTitle,
    sectionVisualGuides,
    sectionVidioClips,
    sectionChallenges,
    sectionTopCodepens,
  } = AnnotationsData;

  const { challenges } = sectionChallenges,
    { videoClips } = sectionVidioClips,
    { topCodepens } = sectionTopCodepens;

  return (
    <>
      <header className="py-8 bg-c-first-main relative text-center">
        <div className="l-container">
          <h2 className="animation-flow-left mb-4 text-c-accent-darker text-fp-xxlarge">
            {title}
          </h2>
          <p className="animation-flow-right text-c-first-darker-100 text-fp-base f-first lg:text-fp-xlarge">
            {subTitle}
          </p>
        </div>
      </header>
      <section className="text-center my-24">
        <h3 className="title-decoration title-section">
          {sectionVisualGuides.title}
        </h3>
      </section>
      <section className="text-center my-24">
        <h3 className="title-decoration title-section">
          {sectionVidioClips.title}
        </h3>
        <div className="l-container flex flex-wrap justify-center gap-5">
          {videoClips.map((videoclip, index) => (
            <CardVideoclip
              key={index}
              name={videoclip.name}
              video={videoclip.video}
              poster={videoclip.poster}
              linkPen={videoclip.linkPen}
            />
          ))}
        </div>
      </section>
      <section className="text-center my-24">
        <h3 className="title-decoration title-section">
          {sectionChallenges.title}
        </h3>
        <div className="l-container flex flex-wrap justify-center gap-5">
          {challenges.map((challenge, index) => (
            <CardChallenge
              key={index}
              name={challenge.name}
              image={challenge.image}
              linkPreview={challenge.linkPreview}
              linkCode={challenge.linkCode}
              linkFM={challenge.linkFM}
            />
          ))}
        </div>
      </section>
      <section className="text-center my-24">
        <h3 className="title-decoration title-section">
          {sectionTopCodepens.title}
        </h3>
        <div className="l-container grid gap-y-12 lg:gap-x-5 lg:grid-cols-2">
          {topCodepens.map((codepen, index) => (
            <EmbedPen
              key={index}
              title={codepen.title}
              srcPen={codepen.srcPen}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Annotations;
