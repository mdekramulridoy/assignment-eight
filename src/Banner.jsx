import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="relative pt-10  mx-4 text-center flex items-center flex-col rounded-bl-lg rounded-br-lg px-20 bg-[#9538E2] text-white pb-64">
           <div className="flex text-center items-center flex-col px-20 gap-9">
           <h1 className="text-6xl font-bold">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p className="text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <Link to={"/"} className="bg-white text-[#9538E2] text-lg font-bold py-1 px-4 rounded-3xl">Shop Now</Link>
           </div>
           <div className="absolute rounded-lg -bottom-20   bg-transparent border w-3/5 h-2/4">
                <div className="  p-3 rounded-lg items-center">
                    <img className="h-full w-full object-cover rounded-lg" src="https://i.ibb.co.com/YP8BVmn/banner.jpg" alt="" />
                </div>
           </div>
        </div>
    );
};

export default Banner;