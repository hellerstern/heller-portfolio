import { useContext } from "react";
import { DarkContext } from "../context/darkThemeContext";

const LayoutFooter = () => {
  const { darkMode } = useContext(DarkContext);
  const footerYear = new Date().getFullYear();
  return (
    <div
      className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex  shadow-lg border-t pt-4`}
    >
      <div className="font-black text-xl flex max-md:flex-col gap-2 items-center justify-between w-full ">
        <div className="flex items-center justify-center gap-8 max-sm:gap-4 max-sm:text-base">
          <a className="active:translate-y-0.5" href="/about">
            About
          </a>
          <a className="active:translate-y-0.5" href="/projects">
            Projects
          </a>
          <a className="active:translate-y-0.5" href="/contact">
            Contact
          </a>
        </div>
        <p className="font-medium max-sm:text-base text-center">
          Copyright &copy; {footerYear} All rights reserved
        </p>
      </div>
    </div>
  );
};

export default LayoutFooter;
