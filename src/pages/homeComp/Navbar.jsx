
import pdfFile from "/resumeExample.pdf"
const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100 px-20">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://i.ibb.co/VB3GWVC/pic2-removebg-preview.png" />
                            </div>
                        </div> Nifat Hossain</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="font-bold text-lg"><a href="/#intro">Home</a></li>
                        <li className="font-bold text-lg"><a href="/#aboutMe">About Me</a></li>
                        <li className="font-bold text-lg"><a href="/#projects">Projects</a></li>
                        <li className="font-bold text-lg"><a href="/#contact">Contact</a></li>
                        <li className="font-bold text-lg"><a href={pdfFile} download={'test.pdf'}>Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;