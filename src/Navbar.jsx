import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = ({ whiteBackground }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    setCartCount(savedCart.length);
    setWishlistCount(savedWishlist.length);
  }, []);


  useEffect(() => {
    const handleCartUpdated = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(savedCart.length);
    };
    
    const handleWishlistUpdated = () => {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(savedWishlist.length);
    };

    window.addEventListener('cart-updated', handleCartUpdated);
    window.addEventListener('wishlist-updated', handleWishlistUpdated);

    return () => {
      window.removeEventListener('cart-updated', handleCartUpdated);
      window.removeEventListener('wishlist-updated', handleWishlistUpdated);
    };
  }, []);

  const isHomePage = currentPath === "/";

  const linkClasses = (path) =>
    `px-4 py-2 rounded-lg ${currentPath === path ? "bg-purple-700 text-white font-bold" : isHomePage ? "text-white" : "text-black"}`;

  return (
    <div className={`mx-4 rounded-tl-lg rounded-tr-lg p-1 ${whiteBackground ? 'bg-slate-50' : 'bg-[#9538E2]'}`}>
      <div className={`navbar text-xl rounded-tl-lg rounded-tr-lg px-20 ${isHomePage ? 'text-white' : 'text-black'}`}>
        <div className="navbar-start">
          <Link className="font-bold text-xl" to="/">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <Link to="/" className={linkClasses("/")}>Home</Link>
            <Link to="/statistics" className={linkClasses("/statistics")}>Statistics</Link>
            <Link to="/dashboard" className={linkClasses("/dashboard")}>Dashboard</Link>
            <Link to="/app" className={linkClasses("/app")}>Our App</Link>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <Link to="/cart">
            <button className="bg-white text-black text-center flex rounded-full">
              <FontAwesomeIcon className="p-2 rounded-full text-black" icon={faCartShopping} />
              <span className="p-1">{cartCount}</span>
            </button>
          </Link>
          <Link to="/wishlist">
            <button className="bg-white text-black text-center flex rounded-full">
              <FontAwesomeIcon className="p-2 text-black rounded-full" icon={faHeart} />
              <span className="p-1">{wishlistCount}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  whiteBackground: PropTypes.bool.isRequired,
};

export default Navbar;
