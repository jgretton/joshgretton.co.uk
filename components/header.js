import Link from "next/link";

const Header = ({ isOpen, setIsOpen }) => {
  const links = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/",
    },
    {
      title: "Live Projects",
      link: "/#liveProjects",
    },
    {
      title: "Projects",
      link: "/#projects",
    },
  ];
  return (
    <div className="xl:container mx-auto px-4 sm:px-16 py-4 bg-white fixed inset-x-0 top-0 z-20">
      <div className="flex row justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl cursor-pointer">
            JG <span className="text-blue-300"> / </span>
          </h1>
        </Link>
        <nav className="hidden sm:block">
          <Link href="/about">
            <a className="mx-10">About</a>
          </Link>
          <Link href="/" className="mx-10">
            Contact
          </Link>
        </nav>

        <nav className="sm:hidden text-right">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={` 
                              ${
                                isOpen
                                  ? "translate-x-0 duration-700"
                                  : "translate-x-1/2 duration-150"
                              } absolute inset-0 top-full flex flex-col w-full h-screen pr-10 transition-all `}
          >
            {links.map((link) => {
              return (
                <Link key={link.title} href={link.link}>
                  <a
                    className="self-end my-7 text-xl tracking-wider font-normal text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.title}
                  </a>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
