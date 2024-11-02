

const DevDive = () => {
    return (
        <div className="relative">
            <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] inset-0 z-10 absolute opacity-20"></div>
            <div className="bg-slate-200 opacity-65 absolute inset-0"></div>
            <div className="pt-20 md:pt-32 flex flex-col md:flex-row items-center gap-8 p-4 md:p-16 z-20 relative">
                <div>
                    <img src="https://i.ibb.co.com/wd6QQ98/file.png" alt="" />
                    <div className="flex justify-center">
                        <div className="flex gap-4">
                            <a href="https://devdive1.netlify.app/" target="_blank"><button className="btn btn-outline btn-primary">Live Preview</button></a>
                            <a href="https://github.com/MDRUHULAMIN7/DevDive-Client-Side" target="_blank"><button className="btn btn-outline">Client site code</button></a>
                            <a href="https://github.com/MDRUHULAMIN7/Dev-Dive-Server-Side" target="_blank"><button className="btn btn-outline">Server code</button></a>
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">DevDive</h2>
                    <p className="text-lg">A platform for developers to share technical knowledge and provide debugging assistance.</p>
                    <p className="text-lg">It is a full-stack website using MERN stack</p>
                    <p className="text-lg">Users can create post and ask for assistance or simply share their knowledge</p>
                    <p className="text-lg">AI chatBot, BuiltIn code editor and compiler, conversation with others by message or video chat</p>
                    <p className="text-lg">Access to premium mentor support using payment system of SSLCOMMERZ</p>
                    <p className="text-lg">This Website is responsible for all devices and dark mode available.</p>
                    <h2 className="text-2xl font-semibold">Technologies Used : </h2>
                    <p className="text-lg">React, MongoDB, Node js, Express, Firebase,SSLCOMMERZ, JWT, React Axios, tanstack query,vercel, Netlify</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DevDive;