import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
    const total = cartData.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, []);

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);

    toast.success("Item removed from cart!");
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleSortByPrice = () => {
    setActiveButton("sort");
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedItems);
  };

  const handlePurchase = () => {
    setActiveButton("purchase");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTotalPrice(0);
    setCartItems([]); 
    localStorage.setItem("cart", JSON.stringify([]));
    window.dispatchEvent(new Event('cart-updated'));
    navigate("/");
  };

  return (
    <div className="mt-6 mx-40 pb-10">
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Cart</h1>

          <div className="flex text-lg items-center gap-2">
            <button 
              onClick={handleSortByPrice} 
              disabled={cartItems.length < 2}
              className={`border rounded-full py-2 px-5 font-bold ${activeButton === "sort" ? "bg-[#9538E2] text-white" : "border-[#9538E2]"} ${cartItems.length < 2 ? "bg-gray-400 cursor-not-allowed" : ""}`}>
              Sort by Price
            </button>
            <button 
              onClick={handlePurchase}
              disabled={cartItems.length === 0}
              className={`border rounded-full py-2 px-5 font-bold ${activeButton === "purchase" ? "bg-[#9538E2] text-white" : "border-[#9538E2] text-black"} ${cartItems.length === 0 ? "bg-gray-400 cursor-not-allowed" : ""}`}>
              Purchase
            </button>
            <h1 className="font-bold">Total Cost :</h1>
            <h1 className="total-price font-bold">${totalPrice}</h1>
          </div>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg w-full flex text-black gap-4 p-3 items-center justify-between">
              <div className="flex">
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="m-2 border w-2/6 rounded-lg"
                />
                <div className="flex flex-col gap-3 text-lg p-2">
                  <p className="font-bold text-xl">{item.product_title}</p>
                  <p>{item.description}</p>
                  <p className="font-bold text-xl">Price: ${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="right-0 font-bold text-xl border rounded-lg border-red-500 p-3"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-xl">Cart is empty.</p>
        )}
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg text-center items-center flex flex-col gap-3">
            <img src="https://i.ibb.co.com/0G2Q9z5/Group.png" alt="" />
            <h1 className="text-3xl font-bold">Payment Successfully</h1>
            <hr className="border-1 w-full my-3" />
            <p className="text-xl">Thanks for Purchasing</p>
            <h2 className="text-xl font-bold">Total Price: ${totalPrice}</h2>
            <button 
              onClick={handleCloseModal} 
              className="mt-4 w-full bg-neutral-200 rounded-full py-2 px-5 font-bold text-xl">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
