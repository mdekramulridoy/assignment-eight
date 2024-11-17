import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(wishlistData);
  }, []);

  const handleRemoveFromWishlist = (index) => {
    const updatedWishlist = [...wishlistItems];
    updatedWishlist.splice(index, 1);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Show success toast
    toast.success("Item removed from wishlist!");

    // Dispatch event to update wishlist count in Navbar
    window.dispatchEvent(new Event('wishlist-updated'));
  };

  return (
    <div className="mt-6 mx-40 pb-10">
      <div className="flex flex-col gap-9">
        <h1 className="text-2xl font-bold">Wishlist</h1>

        {wishlistItems.length > 0 ? (
          wishlistItems.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg w-full justify-between flex text-black gap-4 p-3 items-center">
              <div className="flex">
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className=" m-2 border w-2/6 rounded-lg"
                />
                <div className="flex flex-col gap-3 text-lg p-2">
                  <p className="font-bold text-xl">{item.product_title}</p>
                  <p>Price: ${item.description}</p>
                  <p className="font-bold text-xl">Price: ${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromWishlist(index)}
                className="right-0 font-bold text-xl border rounded-lg border-red-500 p-3"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-xl">Wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
