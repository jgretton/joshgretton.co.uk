import WorkItem from "../components/workItem";
import React from "react";

import Guidecks from "../public/images/GuidecksApp.png";

const LiveProjects = () => {
  return (
    <div
      id="liveProjects"
      className="w-full bg-white z-10 relative sm:mb-44 mb-32 px-2"
    >
      <h3 className="sm:sticky sm:top-80 font-light tracking-widest sm:text-4xl text-3xl transform sm:-rotate-90 sm:origin-top-left sm:-translate-x-12 sm:h-0 sm:float-left px-4 sm:px-0 mb-5 sm:mb-0">
        <span className="text-blue-300 "> Live</span> Projects
      </h3>
      <div className="sm:px-4 mb-10 relative group overflow-hidden">
        <WorkItem
          img={Guidecks}
          title="Guidecks"
          tags={["React", "GraphQL", "MongoDB", "Node JS", "Express"]}
          live_URL="https://guidecks.com/"
        />
      </div>
      <div className="sm:px-4 mb-10 relative group overflow-hidden">
        <WorkItem
          img={Guidecks}
          title="Guidecks App"
          tags={["React Native", "Expo"]}
        />
      </div>
    </div>
  );
};

export default LiveProjects;
