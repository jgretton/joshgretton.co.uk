import Head from "next/head";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import TopOfPage from "../components/topOfPage";
import Hero from "./_hero";
import LiveProjects from "./_liveProjects";
import Work from "./_work";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <TopOfPage isOpen={isOpen} />
      <Head>
        <title>Josh Gretton portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" ">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero isOpen={isOpen} />
      </header>

      <main
        className={
          isOpen
            ? " xl:container xl:mx-auto sm:mt-v60 mt-96   bg-white sm:px-10 transition-opacity duration-700 opacity-0"
            : "xl:container xl:mx-auto sm:mt-v60 mt-96   bg-white sm:px-10  transition-opacity  duration-300 opacity-100"
        }
      >
        <LiveProjects />
        <Work />
      </main>

      <footer>
        <Footer />
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>

      {/* <footer className="">
      </footer> */}
    </div>
  );
}
