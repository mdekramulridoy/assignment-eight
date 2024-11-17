import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white footer footer-center pt-14">
      <div className="">
        <div className="flex gap-3 flex-col">
            <h1 className="text-3xl font-bold">
            Gadget Heaven
            </h1>
            <p className="text-lg">
            Leading the way in cutting-edge technology and innovation.
            </p>

        </div>
        <div className="border my-4 border-b-slate-50 w-full"></div>
        <div className="flex justify-between gap-96 pb-32">
          <div className="flex
          flex-col gap-3 text-center">
            <h1 className="text-lg font-bold">Services</h1>
            <div className="flex flex-col gap-2">
            <Link to={"/"}>Product Support</Link>
            <Link to={"/"}>Order Tracing</Link>
            <Link to={"/"}>Shopping & Delivery</Link>
            <Link to={"/"}>Returns</Link>
            </div>
          </div>
          <div className="flex
          flex-col gap-3 text-center">
            <h1 className="text-lg font-bold">Company</h1>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Careers</Link>
            <Link to={"/"}>Contact</Link>
          </div>
          <div className="flex
          flex-col gap-3 text-center">
            <h1 className="text-lg font-bold">Legal</h1>
            <Link to={"/"}>Terms of Service</Link>
            <Link to={"/"}>Privacy Policy</Link>
            <Link to={"/"}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
