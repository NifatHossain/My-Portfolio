import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className=" bg-black text-white py-16 px-[10%]">
           <footer className="footer pb-16">
                <aside>
                    <p><span className="text-xl font-semibold">NIFAT HOSSAIN</span></p>
                    <p>FrontEnd Developer</p>
                    <p>Creating user friendly wesites using MERN stack</p>
                </aside>
                <nav>
                    <h6 className="text-2xl text-white font-semibold">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-4xl">
                    <a href="https://www.linkedin.com/in/nifat-hossain" target="_blank"><FaLinkedin /></a>
                    <a href="https://www.facebook.com/mdnifat.hossain.9" target="_blank"><FaFacebookSquare /></a>
                    <a href="https://github.com/NifatHossain" target="_blank"><FaSquareGithub /></a>
                    </div>
                </nav>
            </footer> 
            <div className=" bg-black text-white">
                <p className="text-center py-10 border-t border-slate-200">Copyright © {new Date().getFullYear()} - All right reserved by Nifat Hossain</p>
            </div>
        </div>
    );
};

export default Footer;