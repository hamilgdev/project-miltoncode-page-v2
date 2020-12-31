import React from "react";
import PhotoProfile from "../../assets/img/photo_profile.png";
import CardSkill from "../../components/utils/CardSkill";
import NetworksData from "../../data/NetworksData";
import AboutUsData from "../../data/AboutUsData";
import CV from "../../assets/files/curriculum_vitae_compressed.pdf";

const AboutUs = () => {
  const { title, subTitle, tagline, sectionAbout, sectionSkills } = AboutUsData;
  const { skills } = sectionSkills;

  return (
    <>
      <header className="sm:overflow-hidden bg-c-first-main relative">
        <div className="l-container grid grid-rows-1 grid-flow-row auto-rows-min sm:grid-cols-2 sm:items-center ">
          <div className=" leading-snug">
            <h1 className="animation-flow-left text-c-accent-darker text-fp-xxlarge lg:text-fp-bigger">
              {title}
            </h1>
            <p className="animation-flow-right text-c-first-darker-100 text-fp-base f-first lg:text-fp-large">
              {subTitle}
            </p>
            <h2 className="animation-flow-left text-c-first-lighter-100 text-fp-large lg:text-fp-xxlarge">
              {tagline}
            </h2>
          </div>
          <div
            style={{ maxWidth: "400px" }}
            className="animation-flow-right lg:m-auto pointer-events-none justify-self-end"
          >
            <img
              className="pointer-events-none"
              src={PhotoProfile}
              alt="Hamilton G"
            />
          </div>
          <div className="absolute transform translate-y-full bottom-0 flex gap-8 sm:transform-none">
            <div className="hidden sm:flex sm:gap-2">
              {NetworksData.map((network, index) => (
                <a
                  href={network.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="inline-flex items-center justify-center w-12 h-12 bg-c-accent-darker hover:text-c-first-main text-c-second-main rounded-b-md sm:rounded-br-none sm:rounded-bl-none sm:rounded-t-md sm:transform sm:hover:scale-y-110 sm:transition-transform sm:duration-300"
                >
                  <span className="text-fp-base">{network.icon}</span>
                </a>
              ))}
            </div>
            <a
              href={CV}
              download="curriculum_vitae_compressed"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 h-12 bg-c-accent-darker hover:text-c-first-main text-c-second-main rounded-b-md sm:rounded-br-none sm:rounded-bl-none sm:rounded-t-md sm:transform sm:hover:scale-y-110 sm:transition-transform sm:duration-300"
            >
              <span className="f-first text-fp-base">Descargar CV</span>
            </a>
          </div>
        </div>
      </header>
      <section className="text-center my-24">
        <div className="px-4 md:px-0 max-w-screen-md m-auto">
          <h3 className="title-decoration title-section">
            {sectionAbout.title}
          </h3>
          <p className="text-fs-regular">{sectionAbout.description}</p>
        </div>
      </section>
      <section className="text-center my-24">
        <div className="l-section-md">
          <h3 className="title-decoration title-section">
            {sectionSkills.title}
          </h3>
          <p className="text-fs-regular">{sectionSkills.description}</p>
        </div>
        <div className="l-section-sm flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <CardSkill
              key={index}
              name={skill.name}
              icon={skill.icon}
              reducer={skill.reducer}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
