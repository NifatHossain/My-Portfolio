
import pdfFile from "/NifatHossain_WebDeveloperResume.pdf"
const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className="font-bold text-lg"><a href="/">Home</a></li>
                        <li className="font-bold text-lg"><a href="/#aboutMe">About Me</a></li>
                        <li className="font-bold text-lg"><a href="/#projects">Projects</a></li>
                        <li className="font-bold text-lg"><a href="/#contact">Contact</a></li>
                        {/* <li className="font-bold text-lg"><a href={pdfFile} download={'test.pdf'}>Resume</a></li> */}
                    </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl">
                        <div className="avatar hidden md:block">
                            <div className="w-12 rounded-full">
                                <img src="https://i.ibb.co/VB3GWVC/pic2-removebg-preview.png" />
                            </div>
                        </div> Nifat Hossain</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li className="font-bold text-lg"><a href="/">Home</a></li>
                        <li className="font-bold text-lg"><a href="/#aboutMe">About Me</a></li>
                        <li className="font-bold text-lg"><a href="/#projects">Projects</a></li>
                        <li className="font-bold text-lg"><a href="/#contact">Contact</a></li>
                        {/* <li className="font-bold text-lg"><a href={pdfFile} download={'test.pdf'}>Resume</a></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={pdfFile} download={'NifatHossain_WebDeveloperResume.pdf'}><button className="btn btn-primary text-white">Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;