import React from "react";
import Image from "next/image";

const WorkItem = ({ img, title, tags, github_URL, live_URL, alt }) => {
  return (
    <div>
      <div className=" group w-full relative sm:h-134 h-80 ">
        <Image
          src={img}
          alt={alt}
          className="h-full w-full object-cover object-top rounded-t-lg"
          layout="fill"
          priority
        />
      </div>
      <div className="mt-5 h-auto bg-white transition-all duration-200 transform group-hover:translate-y-0 md:relative md:translate-y-0 ">
        <h3 className="sm:text-3xl text-2xl font-light tracking-wide transform md:translate-y-0 lg:-translate-y-full  bg-white py-3">
          <span className=" w-px h-full border-2 border-blue-300 mr-3 "></span>
          {title}
        </h3>

        <div className="flex flex-col m-5 transform md:translate-y-0 lg:-translate-y-full">
          {live_URL ? (
            <a
              href={live_URL}
              target="_blank"
              rel="noreferrer"
              className="mb-3 text-gray-700 font-medium tracking-wide sm:text-md text-sm  hover:text-blue-300 self-start flex flex-row leading-6 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:h-6 sm:w-6 h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Preview live site
            </a>
          ) : null}

          {github_URL ? (
            <a
              href={github_URL}
              target="_blank"
              rel="noreferrer"
              className="mb-3 text-gray-700 font-medium tracking-wide sm:text-md text-sm  hover:text-blue-300 self-start flex flex-row leading-6 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:h-6 sm:w-6 h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View code on Github
            </a>
          ) : null}
        </div>
        <div className="transform lg:-translate-y-full pb-3 pl-3">
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-medium tracking-wide text-gray-700 mr-2 mb-2"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
