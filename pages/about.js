import * as React from "react";
import Header from "../components/header";
import Hero from "./_hero";
import Footer from "../components/footer";
import TopOfPage from "../components/topOfPage";
import { useState } from "react";

import Image from "next/image";
import PhotoOfMe from "../public/images/Photo-of-me-2.jpg";
import { languages } from "../data/languages";

// markup
const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="  h-full w-full relative">
      <TopOfPage />
      <title>Josh Gretton</title>
      <header className=" ">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero isOpen={isOpen} />
      </header>

      <main
        className={
          isOpen
            ? " xl:container xl:mx-auto mt-v40   bg-white sm:px-10 transform scale-50 transition-all duration-700 opacity-0"
            : "xl:container xl:mx-auto mt-v40   bg-white sm:px-10 transform scale-100 transition-all  duration-300 opacity-100"
        }
      >
        <div className="w-full  bg-white z-10 relative mb-32 px-3">
          <div className="sm:px-4 mb-10 relative overflow-hidden clear-left flex md:flex-row flex-col ">
            <div className="lg:w-1/3 w-4/6 relative lg:h-full sm:h-1/2 lg:self-center md:self-start self-center">
              <Image
                src={PhotoOfMe}
                alt="Photo of me"
                className="lg:h-full md:w-full h-1/3 lg:object-cover lg:object-top object-contain rounded-2xl "
                priority
                placeholder="blur"
              />
            </div>
            <div className="mt-5 lg:w-2/3 w-full h-auto bottom-0 left-0 right-0  px-4 relative">
              <h3 className="sm:text-3xl text-2xl font-light tracking-wide  bg-white py-3">
                <span className=" w-px h-full border-2 border-blue-300 mr-3 "></span>
                About me
              </h3>
              <p className="text-gray-700 md:text-base text-sm tracking-wider font-light leading-6 py-4">
                I am a self taught full stack developer. I started working on
                Front end code around 4 years ago and slowly transitioned into
                React. I am the co-founder of Guidecks; an audio guide solution
                for businesses.
              </p>

              <p className="text-base font-normal tracking-wider my-10">
                Languages and frameworks I am confident with:
              </p>
              <div className="flex flex-row flex-wrap">
                {languages.map((language) => {
                  return (
                    <span
                      key={language.title}
                      className="bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-medium tracking-wide text-gray-700 mr-2 my-2 flex flex-row"
                    >
                      <Image
                        src={language.icon}
                        alt={language.title}
                        className={`w-6 h-6 `}
                        priority
                        placeholder="blur"
                      />
                      <p className="self-center pl-2">{language.title} </p>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
