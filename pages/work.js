import React from "react";
import WorkItem from "../components/workItem";

import Feeder from "../public/images/feeder.jpg";
import PloughInn from "../public/images/Plough.jpg";

const Work = () => {
  return (
    <div id="projects" className="w-full bg-white z-10 relative mb-24 px-3">
      <h3 className="sm:sticky sm:top-80 font-light tracking-widest sm:text-4xl text-3xl transform sm:-rotate-90 sm:origin-top-left sm:-translate-x-12 sm:float-left sm:h-0 px-4 sm:px-0 mb-5">
        Projects
      </h3>

      <div className="flex lg:flex-row flex-col clear-left flex-wrap">
        <div className="lg:w-2/4 w-full sm:px-4 mb-10 relative overflow-hidden group">
          <WorkItem
            img={Feeder}
            title="Feeder"
            tags={["HTML", "CSS", "Javascript"]}
            live_URL="https://feeder-joshgretton.netlify.app/"
            github_URL=" https://github.com/jgretton/Feeder"
          />
        </div>

        <div className="lg:w-2/4 w-full sm:px-4 mb-10 relative overflow-hidden group">
          <WorkItem
            img={PloughInn}
            title="The Plough Inn"
            tags={["HTML", "CSS", "Javascript"]}
            live_URL="https://plough-joshgretton.netlify.app/"
            github_URL=" https://github.com/jgretton/The-Plough-Inn"
          />
        </div>

        <div className="lg:w-2/4 w-full sm:px-4 mb-10 relative overflow-hidden group">
          <WorkItem
            img={PloughInn}
            title="Rock Paper Scissors"
            tags={["Javascript", "HTML", "CSS"]}
            live_URL="https://rps-joshgretton.netlify.app/"
            github_URL=" https://github.com/jgretton/RPS-javascript"
          />
        </div>

        <div className="lg:w-2/4 w-full sm:px-4 mb-10 relative overflow-hidden group">
          <WorkItem
            img={PloughInn}
            title="Tic-Tac-Toe"
            tags={["Javascript", "HTML", "CSS"]}
            live_URL="https://tictactoe-joshgretton.netlify.app/"
            github_URL="https://github.com/jgretton/tic-tac-toe"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
