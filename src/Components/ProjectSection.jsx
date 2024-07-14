import { Link } from "react-router-dom";


const ProjectSection = () => {
    return (
        <div id="projects" className="bg-gradient-to-l from-slate-200 to-slate-50 py-16 space-y-4">
           <h2 className="text-3xl uppercase font-bold text-center">Projects</h2> 
            <div className="max-w-2xl mx-auto pb-16">
                <p className="text-center text-lg px-4">Here are a few personal projects that I have created. You can also find details of each project.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-4 md:px-14">
                <div>
                    <img src="https://i.ibb.co/r3bFx3v/image-1.png" alt="" />
                </div>
                <div className="max-w-2xl space-y-2 md:space-y-4">
                    <h2 className="text-2xl font-semibold text-center">Blood Bridge</h2>
                    <p className="text-lg text-center">Blood Bridge is a demo website for connecting blood donors and Recipients.</p>
                    <div className="flex justify-center">
                        <Link to={'/bloodbridge'}> <button className="btn btn-primary text-white mt-1 md:mt-4">Project Details</button> </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-4 justify-center items-center px-4 md:px-14">
                <div>
                    <img src="https://i.ibb.co/fGKr0VL/image-2.png" alt="" />
                </div>
                <div className="max-w-2xl space-y-4">
                    <h2 className="text-2xl font-semibold  text-center">Cure Hospital</h2>
                    <p className="text-lg  text-center">A website where patients can look for desired doctors and book appointment.</p>
                    <div className="flex justify-center">
                        <Link to={'/curehospital'}> <button className="btn btn-primary text-white mt-1 md:mt-4">Project Details</button> </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-4 justify-center items-center px-4 md:px-14">
                <div>
                    <img src="https://i.ibb.co/5MH6j6q/image-3.png" alt="" />
                </div>
                <div className="max-w-2xl space-y-4">
                <h2 className="text-2xl font-semibold  text-center">Aesthetic Pottery</h2>
                    <p className="text-lg  text-center">A website for buying unique and traditional pottery items.</p>
                    <div className="flex justify-center">
                        <Link to={'/potteryshop'}> <button className="btn btn-primary text-white mt-1 md:mt-4">Project Details</button> </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectSection;