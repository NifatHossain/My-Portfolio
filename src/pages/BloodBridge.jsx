

const BloodBridge = () => {
    return (
        <div className="relative">
            <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] inset-0 z-10 absolute opacity-20"></div>
            <div className="bg-slate-200 opacity-65 absolute inset-0"></div>
            <div className="pt-48 flex gap-8 p-16 z-20 relative">
                <div>
                    <img src="https://i.ibb.co/r3bFx3v/image-1.png" alt="" />
                    <div className="flex justify-center">
                        <div className="flex gap-4">
                            <a href="https://bloodbridgelive.netlify.app" target="_blank"><button className="btn btn-outline btn-primary">Live Preview</button></a>
                            <a href="https://github.com/NifatHossain/Blood-Bridge-Client-Site" target="_blank"><button className="btn btn-outline">Client site code</button></a>
                            <a href="https://github.com/NifatHossain/Blood-Bridge-Server" target="_blank"><button className="btn btn-outline">Server code</button></a>
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Blood Bridge</h2>
                    <p className="text-lg">Blood Bridge is a demo website for connecting blood donors and Recipients</p>
                    <p className="text-lg">It is a full-stack website using MERN stack</p>
                    <p className="text-lg">There are three types of users in this platform. Admin(Have access to all information), Volunteer(admin can provide some special Accesses), Blood Donor.</p>
                    <p className="text-lg">Admin can promote donors to volunteer or even promote to another admin. Admin can also block users. Blocked users can not create any new request.</p>
                    <p className="text-lg">Donors(users) can request for Blood and other donors can accept requests and donate blood. User who requested for blood can not accept his own request.</p>
                    <p className="text-lg">This Website is responsible for all devices.</p>
                    <h2 className="text-2xl font-semibold">Technologies Used : </h2>
                    <p className="text-lg">React, MongoDB, Node js, Express, Firebase, JWT, React Axios, tanstack query,vercel, Netlify</p>
                    
                </div>
            </div>
        </div>
    );
};

export default BloodBridge;