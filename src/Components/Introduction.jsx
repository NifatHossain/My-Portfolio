import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Introduction = () => {
    return (
        <div className="flex justify-center items-center relative h-[calc(100vh-80px)]">
            <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] inset-0 z-10 absolute opacity-20"></div>
            <div className="bg-slate-200 opacity-65 absolute inset-0"></div>
            <div className="z-20 flex flex-col justify-center items-center space-y-8">
                <h1 className="text-4xl font-semibold text-black uppercase">Hi! I am Nifat Hossain</h1>
                <h2 className="text-center text-lg ">A Result-Oriented Web Developer building and managing Websites and Web <br /> Applications that leads to the success of the overall product</h2>
                <button className="btn btn-primary text-xl">Projects</button>
            </div>
            <div className="flex flex-col gap-3 absolute left-0 top-[40%] bg-white p-4 text-4xl z-20">
                <a href="" target="_blank"><FaLinkedin /></a>
                <a href="" target="_blank"><FaFacebookSquare /></a>
                <a href="" target="_blank"><FaSquareGithub /></a>

            </div>

        </div>
    );
};

export default Introduction;