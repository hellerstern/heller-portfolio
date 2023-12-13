import { useContext } from "react";

import { DarkContext } from "../context/darkThemeContext";

const Contact = () => {

    const { darkMode } = useContext(DarkContext);

    return (
        <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex  flex-col shadow-lg max-[360px]:px-4 `}>
            <h1 className="font-black text-4xl leading-[50px] uppercase pt-24 pb-12 px-36 max-sm:px-4 max-sm:py-4">Contact</h1>
            <p className="text-2xl px-36 leading-10 font-black uppercase max-sm:px-4 max-sm:text-lg max-lg:px-12">Are you seeking a website that is fast-performing and user-friendly to showcase your product or business? </p>
            <p className="text-2xl px-36 leading-10 font-black uppercase max-sm:px-4 max-sm:text-lg max-lg:px-12">Do you require any form of consultation? </p> <p className="text-2xl px-36 leading-10 font-black uppercase max-sm:px-4 max-sm:text-lg max-lg:px-12">Are there any questions you would like to ask? </p>
            <p className="text-2xl px-36 leading-10 font-black uppercase max-sm:px-4 max-sm:text-lg max-lg:px-12">Do you have any advice for me or simply want to say "Hi 👋"? </p> <p className="text-2xl px-36 leading-10 font-black uppercase max-sm:px-4 max-sm:text-lg max-lg:px-12"> In any case, please feel free to inform me. I will make every effort to respond promptly. 😊 </p>
            <br />
            <p className="text-2xl px-36 leading-10 font-black uppercase max-sm:px-4 max-sm:text-lg max-lg:px-12">
                The most efficient way to contact me is through the following means.</p>
            <div className="flex gap-6 py-12 px-36 flex-wrap max-lg:px-12 max-sm:items-center justify-center">
                <a href="mailto:hellerdrrystern@gmail.com" rel="noreferrer" className="">
                    <div className={`border border-${darkMode} max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-6 py-2`}>Gmail
                    </div>
                </a>
                <a href="/" target="_blank" rel="noreferrer" className="">
                    <div className={`border border-${darkMode} max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-6 py-2`}>WhatsApp
                    </div>
                </a>
                <a href="https://join.skype.com/invite/GLi1PFE3Bydv" target="_blank" rel="noreferrer" className="">
                    <div className={`border border-${darkMode} max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-6 py-2`}>Skype
                    </div>
                </a>
                <a href="https://t.me/hellerdrystern" target="_blank" rel="noreferrer" className="">
                    <div className={`border border-${darkMode} max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-6 py-2`}>Telegram
                    </div>
                </a>
                <a href="https://discord.gg/NxmEtBF3" target="_blank" rel="noreferrer" className="">
                    <div className={`border border-${darkMode} max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-6 py-2`}>Discord
                    </div>
                </a>
            </div>
            <div className="py-16 max-xl:py-8"></div>
        </div >
    )
}

export default Contact;