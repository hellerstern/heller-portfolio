import { DarkContext } from "../context/darkThemeContext";
import { useContext } from "react";

import { projects } from "../consts/site-contents";

const ProjectContainer = () => {
    const { darkMode } = useContext(DarkContext);
    return (
        <div>
            {projects.map((ele, ind) => {
                return (
                    <div key={`element-${ind}`} className={`flex max-xl:flex-col-reverse gap-4 py-12 items-center max-xl:items-start container max-auto px-36 max-lg:px-12 max-sm:px-0`}>
                        <div className={`text-white py-4 flex flex-col gap-4 flex-[1_1_45%]  text-${darkMode}`}>
                            <p className="text-3xl font-bold max-sm:text-xl">{ele.title}</p>
                            <p className={"text-2xl font-thin text-lg"}>{ele.description}</p>
                            <ul className="pl-8 flex flex-col gap-1 pb-4">
                                {ele.tools.map((tech, ind) => {
                                    return (
                                        <li key={`list-${ind}`} className="max-sm:text-base list-disc text-xl font-medium">
                                            {tech}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="flex items-center gap-4">
                                <a href={`${ele.url}`} target="_blank" className={`hover:my-[1px] border-${darkMode} border rounded-full font-bold px-4 py-2 text-xl  max-sm:text-lg hover:shadow-lg uppercase`}>Visit Site</a>
                                {ele.repo ? (
                                    <a
                                        href={`https://github.com/${ele.repo}/`}
                                        className="repo"
                                        target="_blank"
                                        title={`${ele.title} Github Repo.`}
                                    >
                                        <img
                                            src={require("../assets/img/github.png")}
                                            className="w-8 h-8"
                                            alt="heller github"
                                        />
                                    </a>
                                ) : null}

                            </div>
                        </div>
                        <div className="flex-[1_1_55%]">
                            <a href={`${ele.url}`} target="_blank">
                                <img
                                    src={require(`../assets/img/${ele.path}.png`)}
                                    className="rounded-[10px] shadow-2xl hover:shadow-none hover:px-1"
                                    alt=""
                                /></a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectContainer;