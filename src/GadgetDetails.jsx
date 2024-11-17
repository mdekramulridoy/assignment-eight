import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-hot-toast';

const GadgetDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false); 
  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const selectedProduct = data.find(
          (item) => item.product_id === productId
        );
        setProduct(selectedProduct);
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const productExistsInWishlist = wishlist.some(
          (item) => item.product_id === selectedProduct.product_id
        );
        setIsInWishlist(productExistsInWishlist);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [productId]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productExistsInCart = cart.some((item) => item.product_id === product.product_id);

    if (productExistsInCart) {
      toast.error("Already added to cart.");
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Successfully added to cart!");

      window.dispatchEvent(new Event('cart-updated'));
    }
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      toast.error("Already added to wishlist.");
      return;
    }

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Successfully added to wishlist!");

    setIsInWishlist(true);
    window.dispatchEvent(new Event('wishlist-updated'));
  };

  if (!product) {
    return <p>Loading product details... (or an error occurred)</p>;
  }

  return (
    <div className="relative pt-10 mx-4 flex items-center flex-col rounded-lg px-20 bg-[#9538E2] text-white pb-72">
      <div className="flex text-center items-center flex-col px-20 gap-9 ">
        <h1 className="text-6xl font-bold">Product Details</h1>
        <p className="text-xl">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="absolute p-2 rounded-lg -bottom-52 bg-transparent border w-3/5">
        <div className="bg-white rounded-lg w-full flex text-black gap-4">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="h-64 m-2 border rounded-lg"
          />
          <div className="flex mt-2 flex-col gap-1">
            <h1 className="text-xl font-bold">{product.product_title}</h1>
            <p className="text-xl font-semibold">Price: ${product.price}</p>
            <p className="px-2 py-1 border w-1/2 bg-green-50 rounded-full text-center text-green-600 text-md mt-2">
              {product.availability ? "In Stock" : "Out of Stock"}
            </p>
            <p className="text-lg">{product.description}</p>
            <p className="font-bold text-xl mt-2">Specifications</p>
            <ul className="list-decimal text-left mt-1 px-6">
              {product.Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <span className="text-yellow-500 my-2">
              Rating: {product.rating}★
            </span>
            <div className="flex gap-2 mb-2">
              <button
                onClick={handleAddToCart}
                className="bg-[#9538E2] w-[180px] text-white text-lg font-bold py-1 px-4 rounded-full flex items-center text-center justify-center"
              >
                Add To Cart{" "}
                <FontAwesomeIcon
                  className="text-white p-2"
                  icon={faCartShopping}
                />
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`bg-white border text-lg font-bold flex items-center text-center justify-center p-1 rounded-full ${isInWishlist ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={isInWishlist}
              >
                <FontAwesomeIcon
                  className="p-2 wishlist text-black"
                  icon={faHeart}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
