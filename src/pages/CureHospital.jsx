

const CureHospital = () => {
    return (
        <div className="relative">
            <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] inset-0 z-10 absolute opacity-20"></div>
            <div className="bg-slate-200 opacity-65 absolute inset-0"></div>
            <div className="pt-32 flex items-center gap-8 p-16 z-20 relative">
                <div>
                    <img src="https://i.ibb.co/fGKr0VL/image-2.png" alt="" />
                    <div className="flex justify-center">
                        <div className="flex gap-4">
                            <a href="https://cure-hospital.netlify.app" target="_blank"><button className="btn btn-outline btn-primary">Live Preview</button></a>
                            <a href="https://github.com/NifatHossain/Cure-Hospital-Client-Site" target="_blank"><button className="btn btn-outline">Client site code</button></a>
                            <a href="https://github.com/NifatHossain/Cure-Hospital-Server" target="_blank"><button className="btn btn-outline">Server code</button></a>
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Cure Hospital</h2>
                    <p className="text-lg">A website where patients can look for desired doctors and book appointment.</p>
                    <p className="text-lg">Website has login and registration system developed by Firebase</p>
                    <p className="text-lg">Users can act as admins and add new doctors, or remove his previously added doctors</p>
                    <p className="text-lg">Users can act as a patient and can request for an appointment of a doctor</p>
                    <p className="text-lg">Users who added a doctor, can see if there is any appointment request for that doctor</p>
                    <p className="text-lg">This Website is responsible for all devices.</p>
                    <h2 className="text-2xl font-semibold">Technologies Used : </h2>
                    <p className="text-lg">React, MongoDB, Node js, Express, Firebase,vercel, Netlify</p>
                    
                </div>
            </div>
        </div>
    );
};

export default CureHospital;