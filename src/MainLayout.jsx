import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    let pageTitle = "Gadget Heaven";
    if (location.pathname === "/") {
      pageTitle = "Home";
    } else if (location.pathname === "/dashboard") {
      pageTitle = "Dashboard";
    } else if (location.pathname === "/statistics") {
      pageTitle = "Statistics";
    } else if (location.pathname === "/app") {
      pageTitle = "Our App";
    }

    document.title = pageTitle;
  }, [location]);

  return (
    <div className="bg-slate-50 pt-4">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar whiteBackground={!isHomePage} />
      {isHomePage && <Banner />}
      <div className={`min-h-[calc(100vh-172px)] ${isHomePage ? "pt-96" : ""}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
