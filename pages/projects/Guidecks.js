import React from "react";
import Header from "../../components/header";
import Image from "next/image";

import Guidecks_header from "../../public/images/GuidecksApp.png";
import Plough from "../../public/images/Plough.jpg";

const Guidecks = ({ isOpen }) => {
  return (
    <div className="px-6">
      <div className=" group w-full relative sm:h-134 h-80 cursor-pointer ">
        <Image
          src={Guidecks_header}
          alt="guidecks header"
          className="h-full w-full object-cover object-top rounded-t-lg"
          layout="fill"
          priority
          placeholder="blur"
        />
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/4 p-5 mt-20 w-full">
          <p className="text-base font-normal">Project Name</p>
          <p className="text-base font-light ml-1 mb-5">Guidecks</p>

          <p className="text-base font-normal">Technologies used</p>
          <ul className="ml-1">
            <li className="text-base font-light">React js</li>
            <li className="text-base font-light">GraphQl</li>
            <li className="text-base font-light">Mongo DB</li>
          </ul>
        </div>
        <div className="flex-1  mt-20">
          <p className="text-lg font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            dui mauris. Vivamus vehicula, nibh dapibus hendrerit finibus, quam
            dolor volutpat lorem, sed pretium dui eros at libero. Vestibulum vel
            mollis tortor. Fusce ac maximus massa, ac ultricies neque. Duis nec
            sodales lacus. Integer feugiat, urna eget posuere tempor, neque
            lectus aliquet dolor, a rhoncus risus turpis non leo. Phasellus sit
            amet maximus nisi. Vestibulum posuere lobortis turpis quis semper.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec elementum eros sagittis lectus ornare
            sagittis.
          </p>
          <p className="mt-10 text-lg font-light leading-relaxed">
            Nulla aliquet lectus vestibulum augue tempus condimentum
            sollicitudin id elit. Integer vel viverra ex. Nunc vitae molestie
            ipsum, ac posuere ex. Donec cursus pulvinar euismod. Quisque gravida
            ante lorem, in facilisis justo ultrices in. Cras pellentesque diam
            sed urna pharetra, nec gravida ante mattis. Sed eu turpis nec dolor
            pharetra ornare. Sed iaculis sem sem, at volutpat sapien lobortis
            vitae. Vestibulum venenatis tempus efficitur. Integer cursus lectus
            libero. Etiam non luctus turpis. Phasellus fermentum a diam at
            suscipit. Donec eleifend maximus augue vel dictum.{" "}
          </p>
        </div>
      </div>
      <div className=" group w-full relative sm:h-134 h-80 mt-20 cursor-pointer ">
        <Image
          src={Guidecks_header}
          alt="guidecks header"
          className="h-full w-full object-cover object-top rounded-t-lg"
          layout="fill"
          priority
          placeholder="blur"
        />
      </div>
      <div className="flex sm:flex-row flex-col w-full relative  mt-5 justify-between">
        <div className="sm:w-[49%] h-full w-full">
          <Image
            src={Plough}
            alt="guidecks header"
            className="object-top object-fill rounded-b-lg"
            priority
            placeholder="blur"
          />
        </div>
        <div className="sm:w-[49%] h-full w-full">
          <Image
            src={Plough}
            alt="guidecks header"
            className="object-top object-cover rounded-b-lg"
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Guidecks;
