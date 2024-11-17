import { Link } from "react-router-dom";
const Statistics = () => {
    return (
        <div className="relative pt-10  mx-4 text-center flex items-center flex-col rounded-lg px-20 bg-[#9538E2] text-white pb-14">
           <div className="flex text-center items-center flex-col px-20 gap-9">
           <h1 className="text-6xl font-bold">
            Statistics
            </h1>
            <p className="text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <Link to={"/"} className="bg-white text-[#9538E2] text-lg font-bold py-1 px-4 rounded-3xl">Shop Now</Link>
           </div>
           
        </div>
    );
};

export default Statistics;