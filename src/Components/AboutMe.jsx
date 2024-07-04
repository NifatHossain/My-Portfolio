
import pdfFile from "../../public/resumeExample.pdf"
const AboutMe = () => {
    return (
        <div id="aboutMe" className="py-16 bg-gradient-to-t from-slate-200 via-slate-100 to-slate-200 space-y-4">
            <h2 className="text-3xl uppercase font-bold text-center">About Me</h2>
            <div className="max-w-2xl mx-auto pb-16">
                <p className="text-center text-lg">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="grid grid-cols-2 gap-14 px-20 ">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold justify-center">Learn more about me!</h2>
                    <p className="text-lg">I am a frontend-focused web developer using MERN stack to build userfriendly and responsive websites. Explore some of my works in the Projects section.</p>
                    <p className="text-lg">Currently, I am persuing my undergraduate degree in Computer Science and Engineering at North South University, Dhaka. I&apos;m always curious about new technologies and continuously learning them to stay ahead of the curve in an ever-evolving industry.</p>
                    <p className="text-lg">I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me.</p>
                    <a href={pdfFile} download><button className="btn btn-primary text-white text-lg px-4 mt-4">Get Resume</button></a>
                </div>
                <div>
                    <div className="space-y-4 mb-4">
                        <h2 className="text-2xl font-semibold justify-center">Education</h2>
                        <ul>
                            <li className="text-lg">BS in Computer Science & Engineering</li>
                            <li className="text-lg">North South University</li>
                            <li className="text-lg">Year : 2022-2025</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold justify-center mb-4">Skills</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-5">
                                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
                                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> 
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>  
                                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> 
                                <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> 
                                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
                                <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> 
                            </div>
                            <div className="flex gap-5">
                                <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> 
                                <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> 
                                <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> 
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
                                <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> 
                                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
                            </div>  
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;