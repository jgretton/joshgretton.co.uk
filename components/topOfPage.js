import React, { useState, useEffect } from "react";

const TopOfPage = ({ isOpen }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
  }, [showScroll]);
  return (
    <div
      className={`${
        showScroll ? "opacity-100" : "opacity-0 hidden"
      } fixed bottom-20 right-3 z-40 transition-opacity duration-400`}
    >
      <button
        className={` ${isOpen && "hidden"} rounded bg-blue-300 h-8 w-8`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default TopOfPage;
