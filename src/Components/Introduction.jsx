import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Introduction = () => {
    return (
        <div id="intro" className="flex justify-center items-center relative min-h-screen">
            <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] inset-0 z-10 absolute opacity-20"></div>
            <div className="bg-slate-200 opacity-65 absolute inset-0"></div>
            <div className="z-20 flex flex-col justify-center items-center space-y-8">
                <h1 className="text-4xl font-semibold text-black uppercase">Hi! I am Nifat Hossain</h1>
                <h2 className="text-center text-lg ">A Result-Oriented Web Developer building and managing Websites and Web <br /> Applications that leads to the success of the overall product</h2>
                <a href="#projects"><button className="btn btn-primary text-xl text-white">Projects</button></a>
            </div>
            <div className="flex flex-col gap-3 absolute left-0 top-[40%] bg-white p-4 text-4xl z-20">
                <a href="https://www.linkedin.com/in/nifat-hossain" target="_blank"><FaLinkedin /></a>
                <a href="https://www.facebook.com/mdnifat.hossain.9" target="_blank"><FaFacebookSquare /></a>
                <a href="https://github.com/NifatHossain" target="_blank"><FaSquareGithub /></a>

            </div>

        </div>
    );
};

export default Introduction;