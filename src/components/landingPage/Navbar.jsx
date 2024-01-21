import React, { useState } from "react";
import Login from "../authentication/Login";
// import SignUp from '../authentication/SignUp'
import logo from "../images/logo.png";
import { Sling as Hamburger } from "hamburger-react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/Ai";
import landingPic from "../images/landingPic.svg";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/slices/auth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <nav className="justify-between flex relative">
          <div className="flex mr-auto">
            <Link to="/">
              <img className="h-24 w-32" src={logo} alt="" />
            </Link>
            {/* <a href="/"><img className=' ml-10 h-24 w-32' src={logo} alt="" /></a> */}
          </div>

          <div className="flex gap-6 text-lg font-bold">
          {isLoggedIn && (
              <button className=" hidden md:block text-black border text-[1.125rem] rounded-full h-[3rem]  w-[11rem] font-medium  mt-5 border-black  hover:bg-[#014e56] hover:opacity-90 hover:text-white hover:font-medium ">
                {" "}
                <Link to="/Signup">Go To Dashboard</Link>{" "}
              </button>
            )}
            
            {isLoggedIn && (
              <button
                onClick={() => {
                  
                  dispatch(Logout());
                  
                }}
                className=" hidden md:block  text-black border text-[1.125rem] rounded-full h-[3rem]  w-[9.5625rem] font-medium  mt-5 border-black  hover:bg-[#014e56] hover:opacity-90 hover:text-white hover:font-medium"
              >
                {" "}
                Logout{" "}
              </button>
            )}
            
            {!isLoggedIn && (
              <button className=" hidden md:block  text-black border text-[1.125rem] rounded-full h-[3rem]  w-[9.5625rem] font-medium  mt-5 border-black  hover:bg-[#014e56] hover:opacity-90 hover:text-white hover:font-medium">
                {" "}
                <Link to="/Login">Login</Link>{" "}
              </button>
            )}
            {!isLoggedIn && (
              <button className=" hidden md:block text-black border text-[1.125rem] rounded-full h-[3rem]  w-[9.5625rem] font-medium  mt-5 border-black  hover:bg-[#014e56] hover:opacity-90 hover:text-white hover:font-medium ">
                {" "}
                <Link to="/Signup">Signup</Link>{" "}
              </button>
            )}
            <div className="mt-5 absolute right-0  md:hidden lg:hidden xl:hidden">
              <Hamburger toggled={nav} toggle={setNav} />
            </div>
          </div>

          {/* overlay */}
          <div>
            {nav ? (
              <div className="bg-black/70 fixed w-full h-screen z-10 top-0 right-0">
                {" "}
              </div>
            ) : (
              ""
            )}

            {/* sidemenu */}
            <div
              className={
                nav
                  ? "fixed top-0 right-0 w-[15.9375rem] h-screen bg-gray-200 z-10 duration-500"
                  : "fixed top-0 right-[-220%] w-[300px] h-screen bg-white z-10 duration-500"
              }
            >
              {/* innerMenu */}
              <AiOutlineClose
                onClick={() => setNav(!nav)}
                size={25}
                className="absolute right-10 top-10 cursor pointer text-black cursor-pointer"
              />
              <div className="flex flex-col mt-16">
                <Link
                  to="/Login"
                  className="items-center justify-center flex text-black border text-[1.125rem] rounded-full h-[3rem]  w-[9.5625rem] font-medium m-auto mt-8 border-black md:mt-0 hover:bg-[#014e56] hover:text-white hover:font-medium  "
                >
                  {" "}
                  Login{" "}
                </Link>
                {/* <a href="/Login" className='ml-14 font-bold text-gray-300 mb-6 hover:text-red-400'>Login</a> */}
                <Link
                  to="/SignUp"
                  className="items-center justify-center flex text-black border text-[1.125rem] rounded-full h-[3rem]  w-[9.5625rem] font-medium m-auto mt-8 border-black md:mt-0 hover:bg-[#014e56] hover:text-white hover:font-medium "
                >
                  {" "}
                  SignUp{" "}
                </Link>
                {/* <a href="/SignUp" className='ml-14 font-bold text-gray-300 mb-6 hover:text-red-400'>SignUp</a> */}
                {/* <button className=' text-white border-2 text-[1.125rem] rounded-full h-[3rem]  w-[9.5625rem] font-medium m-auto mt-8 border-neutral-50 md:mt-0 hover:bg-neutral-50 hover:text-black hover:font-medium '><a href="/contact">contact us</a></button> */}
              </div>

              <img
                className="absolute h-44 bottom-0 right-0 mb-2"
                src={landingPic}
                alt=""
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
