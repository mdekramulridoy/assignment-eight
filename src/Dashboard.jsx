import { useState } from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div>
      <div className="relative pt-10 mx-4 text-center flex items-center flex-col rounded-lg px-20 bg-[#9538E2] text-white pb-14">
        <div className="flex text-center items-center flex-col px-20 gap-9">
          <h1 className="text-6xl font-bold">Dashboard</h1>
          <p className="text-xl">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("cart")}
              className={`w-[110px] text-lg font-bold py-1 px-4 rounded-3xl ${
                activeTab === "cart"
                  ? "bg-white text-[#9538E2]"
                  : "bg-[#9538E2] text-white border-2 border-white"
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`w-[110px] text-lg font-bold py-1 px-4 rounded-3xl ${
                activeTab === "wishlist"
                  ? "bg-white text-[#9538E2]"
                  : "bg-[#9538E2] text-white border-2 border-white"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
          {activeTab === "cart" ? <Cart /> : <Wishlist />}
        </div>
    </div>
  );
};

export default Dashboard;
