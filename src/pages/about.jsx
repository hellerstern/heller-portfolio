import { useContext } from "react";
import resume from "../assets/pdf/resume.pdf"

import { DarkContext } from "../context/darkThemeContext";

const About = () => {
  const { darkMode } = useContext(DarkContext);

  return (
    <div
      className={`h-[90vh]  container-${darkMode} text-${darkMode} container mx-auto px-36 max-lg:px-24 max-md:px-12 max-sm:px-8 py-4 shadow-lg`}
    >
      <div className="py-12 "></div>
      <div className="grid py-6">
        <div className="flex-[1_1_60%]">
          <p className="font-black text-4xl max-sm:text-3xl max-sm:leading-[48px] leading-[60px]">
            Hi, I'm Heller, <br /> I'm a Full [Stack 😎 | 🥱 Time]  Developer{" "}
          </p>
          <p className="py-2 font-medium text-2xl max-sm:text-xl max-sm:leading-[48px] leading-[60px]">Do you need to know more about me?  <a className="px-2 active:text-green-600  underline uppercase font-black" href={resume} target="_blank" rel="noreferrer">Click Here</a> to have a look at my resume.</p>
        </div>
        <div className="flex-[1_1_40%]"></div>
      </div>
    </div>
  );
};

export default About;
