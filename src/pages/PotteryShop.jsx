

const PotteryShop = () => {
    return (
        <div className="relative">
            <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] inset-0 z-10 absolute opacity-20"></div>
            <div className="bg-slate-200 opacity-65 absolute inset-0"></div>
            <div className="pt-32 flex items-center gap-8 p-16 z-20 relative">
                <div>
                    <img src="https://i.ibb.co/5MH6j6q/image-3.png" alt="" />
                    <div className="flex justify-center">
                        <div className="flex gap-4">
                            <a href="https://aesthetic-pottery-client.web.app" target="_blank"><button className="btn btn-outline btn-primary">Live Preview</button></a>
                            <a href="https://github.com/NifatHossain/Aesthetic-Pottery-Client-Site" target="_blank"><button className="btn btn-outline">Client site code</button></a>
                            <a href="https://github.com/NifatHossain/Aesthetic-Pottery-Server" target="_blank"><button className="btn btn-outline">Server code</button></a>
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Aesthetic Pottery</h2>
                    <p className="text-lg">A website for buying unique & selling and traditional pottery items</p>
                    <p className="text-lg">There are login and registration process for users</p>
                    <p className="text-lg">Registered users can add new products and modify his added products details and can delete it.</p>
                    <p className="text-lg">users can order pottery items</p>
                    <p className="text-lg">This Website is responsible for all devices.</p>
                    <h2 className="text-2xl font-semibold">Technologies Used : </h2>
                    <p className="text-lg">React, MongoDB, Node js, Express, Firebase,vercel, Netlify</p>
                    
                </div>
            </div>
        </div>
    );
};

export default PotteryShop;