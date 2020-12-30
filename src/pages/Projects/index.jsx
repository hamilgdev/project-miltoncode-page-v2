import React, { useState, useEffect } from "react";
import CardProject from "../../components/utils/CardProject";
import ProjectsData from "../../data/ProjectsData";
import NetworksData from "../../data/NetworksData";
import Button from "../../components/utils/Button";

const Projects = () => {
  const [network, setNetwork] = useState({});
  const { title, subTitle, projects } = ProjectsData;

  /**
   * @description Determines the requested social network
   */
  const handleGetNetwork = () => {
    const getNetwork = NetworksData.filter(
      (network) => network.name === "behance"
    );
    setNetwork(...getNetwork);
  };

  useEffect(() => {
    handleGetNetwork();
  }, []);

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
      <main className="section-main mb-24">
        <div className="animation-flow-top relative l-container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              name={project.name}
              image={project.image}
              linkDesing={project.linkDesing}
              linkWeb={project.linkWeb}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <Button
            title={`ver más en ${network.name}`}
            href={network.link}
            icon={network.icon}
            type="dark"
            variante="primary"
          />
        </div>
      </main>
    </>
  );
};

export default Projects;
