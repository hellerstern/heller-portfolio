import { useContext } from "react";

import { DarkContext } from "../context/darkThemeContext";

import SwiperTestimonial from "../component/swiper-testimonial";

const Home = () => {

    const { darkMode } = useContext(DarkContext);
    return (
        <div>
            <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex  shadow-lg items-center`}>
                <div className="flex-[1_1_70%] px-12 max-sm:px-0 flex flex-col gap-4">
                    <div className="flex flex-col gap-4"><img src={require('../assets/img/heller-logo.png')} className="rounded-full w-64 h-64 max-sm:w-56 max-sm:h-56" alt="hu-zheng-logo" />
                        <h1 className="font-black text-4xl leading-[50px]">Web Developer, Writer, <br />Open-Source Developer</h1>
                        <p className="font-thin text-2xl leading-8">I’m <span className="font-bold underline">Heller Stern</span>, a web developer and open-source contributor based in Berlin, Germany🏝.  I’m lead developer of <a href="https://codingcat.dev/" target="_blank" rel="noreferrer" className="underline text-sky-600">CodingCatDev.com</a>, where we develop technologies that grow and consolidate industries. Apart from sitting in front of Computer 🖥️ I like playing Cricket 🏏 and love spending time outdoors in Nature 🌴 where I take some photographs 📷 you can see some of my recent shots on instagram.
                            Got something to say or need any kind of help please feel free to reach out I'll try my best to respond.</p>
                    </div>
                    <div className="flex gap-8 items-center py-4">
                        <a href="https://www.linkedin.com/in/heller-a2208925a/" target="_blank" rel="noreferrer"><img src={require('../assets/img/linkedin.png')} className="w-8 h-8" alt="" /></a>
                        <a href="https://github.com/heller0110" target="_blank" rel="noreferrer"><img src={require('../assets/img/github.png')} className="w-8 h-8" alt="" /></a>
                        <a href="https://hellerstern.medium.com/" target="_blank" rel="noreferrer"><img src={require('../assets/img/medium.png')} className="w-8 h-8" alt="" /></a>
                        <a href="https://stackoverflow.com/users/23007338/heller-stern" target="_blank" rel="noreferrer"><img src={require('../assets/img/stackoverflow.png')} className="w-8 h-8" alt="" /></a>
                    </div>
                </div>
                <div className="flex-[1_1_30%]  max-sm:hidden px-12 flex flex-col gap-4">
                    {/* <div className="flex px-12">
                        <button className={`justify-center items-center text-4xl border rounded border-${darkMode} p-2 leading-10`}></button>
                    </div> */}
                </div>
            </div>
            <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex flex-col gap-4 py-16  shadow-lg`}>
                <p className="text-2xl font-black py-2">Client Testimonials</p>
                <SwiperTestimonial />
            </div>
        </div>
    )
}

export default Home;