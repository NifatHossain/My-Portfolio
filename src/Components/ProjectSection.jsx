import { Link } from "react-router-dom";


const ProjectSection = () => {
    return (
        <div id="projects" className="bg-gradient-to-l from-slate-200 to-slate-50 py-16 space-y-4">
           <h2 className="text-3xl uppercase font-bold text-center">Projects</h2> 
            <div className="max-w-2xl mx-auto pb-16">
                <p className="text-center text-lg">Here are a few personal projects that I have created. You can also find details of each project.</p>
            </div>
            <div className="flex gap-4 justify-center items-center px-14">
                <div>
                    <img src="https://i.ibb.co/r3bFx3v/image-1.png" alt="" />
                </div>
                <div className="max-w-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Blood Bridge</h2>
                    <p className="text-lg">Blood Bridge is a demo website for connecting blood donors and Recipients.</p>
                    <Link to={'/bloodbridge'}> <button className="btn btn-primary text-white mt-4">Project Details</button> </Link>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center px-14">
                <div>
                    <img src="https://i.ibb.co/fGKr0VL/image-2.png" alt="" />
                </div>
                <div className="max-w-2xl space-y-4">
                <h2 className="text-2xl font-semibold">Cure Hospital</h2>
                    <p className="text-lg">A website where patients can look for desired doctors and book appointment.</p>
                    <Link to={'/curehospital'}> <button className="btn btn-primary text-white mt-4">Project Details</button> </Link>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center px-14">
                <div>
                    <img src="https://i.ibb.co/5MH6j6q/image-3.png" alt="" />
                </div>
                <div className="max-w-2xl space-y-4">
                <h2 className="text-2xl font-semibold">Aesthetic Pottery</h2>
                    <p className="text-lg">A website for buying unique and traditional pottery items.</p>
                    <Link to={'/potteryshop'}> <button className="btn btn-primary text-white mt-4">Project Details</button> </Link>
                </div>
            </div>

        </div>
    );
};

export default ProjectSection;