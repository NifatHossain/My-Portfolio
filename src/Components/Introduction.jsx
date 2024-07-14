import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Introduction = () => {
    return (
        <div id="intro" className="flex justify-center items-center relative min-h-screen">
            <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] inset-0 z-10 absolute opacity-20"></div>
            <div className="bg-slate-200 opacity-65 absolute inset-0"></div>
            <div className="flex flex-col items-center justify-center">
                <div className="block md:hidden pt-20 z-20">
                    <div className="avatar">
                        <div className=" w-44 rounded-full">
                            <img src="https://i.ibb.co/VB3GWVC/pic2-removebg-preview.png" />
                        </div>
                    </div>
                </div>
                <div className="z-20 flex flex-col justify-center items-center space-y-8">
                    <h1 className="text-4xl text-center font-semibold text-black uppercase">Hi! I am Nifat Hossain</h1>
                    <h2 className="text-center text-lg px-4">I am a frontend-focused web developer using MERN stack to build <br /> userfriendly and responsive websites</h2>
                    <a href="#projects"><button className="btn btn-primary text-xl text-white mb-6 md:mb-0">Projects</button></a>
                </div>
            </div>
            <div className="hidden md:block flex flex-col w-fit  absolute right-0 md:left-0 top-[20%] md:top-[40%] bg-white p-4 text-4xl z-20">
                <a href="https://www.linkedin.com/in/nifat-hossain" target="_blank"><FaLinkedin className="mb-4" /></a>
                <a href="https://www.facebook.com/mdnifat.hossain.9" target="_blank"><FaFacebookSquare className="mb-4" /></a>
                <a href="https://github.com/NifatHossain" target="_blank"><FaSquareGithub /></a>
            </div>
            <div className="hidden md:block md:absolute md:right-2 lg:right-20 md:top-[22%] z-20">
                <div className="avatar">
                    <div className=" md:w-28 lg:w-80 rounded-full">
                        <img src="https://i.ibb.co/VB3GWVC/pic2-removebg-preview.png" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Introduction;