import { DarkContext } from "../context/darkThemeContext";
import { useContext } from "react";

const LayoutHeader = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkContext);

  return (
    <div
      className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4  shadow-lg`}
    >
      <div className="flex items-center justify-between">
        <div className="text-xl font-black">
          <a href="/" className="flex items-center justify-center gap-4">
            <img
              src={require("../assets/img/heller-logo.png")}
              className="w-12 h-12 rounded-full"
              alt="heller logo"
            />
            <p className="max-[400px]:hidden text-3xl">HE11ER</p>
          </a>
        </div>
        <div className="max-lg:hidden flex items-center justify-center gap-8 font-bold text-lg rounded-full border border-gray-200 py-4 px-12 shadow-md">
          <a className="active:translate-y-0.5" href="/">
            Home
          </a>
          <a className="active:translate-y-0.5" href="/projects">
            Work
          </a>
          <a className="active:translate-y-0.5" href="/blogs">
            Blog
          </a>
          <a className="active:translate-y-0.5" href="/contact">
            Contact
          </a>
        </div>
        <div className="flex gap-4">
          <div className="flex active:translate-y-1 hidden max-lg:block flex items-center justify-center gap-8 font-bold text-lg rounded-full border border-gray-200 py-2 px-6 shadow-md">
            <p>Menu</p>
          </div>
          <button
            onClick={() => {
              toggleDarkMode();
            }}
          >
            {darkMode === true ? (
              <img
                src={require("../assets/img/dark-moon.png")}
                className="w-12 h-12"
                alt="heller moon"
              />
            ) : (
              <img
                src={require("../assets/img/light-sun.png")}
                className="w-12 h-12"
                alt="heller sun"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
