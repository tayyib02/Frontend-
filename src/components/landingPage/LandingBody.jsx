import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AiOutlineSearch } from "react-icons/Ai";
import { GiRoad } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import landingPic from "../images/landingPic.svg";
import Footer from "./Footer";
import electrician from "../images/electrician.jpg";
import { AddressAutofill } from "@mapbox/search-js-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../redux/slices/filter";

const LandingBody = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [value, setValue] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [address, setAddress] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const landingBodyNames = [
    "No more tight budgets",
    "No more time wasted",
    "All the prices you need in one space",
  ];
  // const [address, setAddress] = useState("");

  // Below function is for placeholders
  useEffect(() => {
    setInputKey(Math.random().toString());
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % landingBodyNames.length
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [landingBodyNames.length]);

  const AUTOFILL =
    "pk.eyJ1IjoidGF5eWliMTIzIiwiYSI6ImNsaTR0eGlnOTByeXQzbm53YnBjd292ZHIifQ.W8zvLNBqfsWLZ8esIltTww";
  const TOKEN =
    "pk.eyJ1IjoiaGFtemE4NDc5IiwiYSI6ImNrdDJtanNlazA3cjMybnJ6djZ4a3BjdGUifQ.FPyM33hFYLB6KipwmTDDlQ";

  useEffect(() => {
    if (inputValue) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              inputValue
            )}.json?access_token=${TOKEN}&autocomplete=true&types=place`
          );
          const features = response.data.features;

          setSuggestions(features);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleSelect = (address) => {
    setInputValue(address.place_name);
    console.log("Selected Address:", address);
    dispatch(addFilter({ ...filter, city: address.text }));
    console.log("Coordinates:", address.center);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    }
    navigate("/Home");
  };

  return (
    <div className="max-w-[1500px] px-6 m-auto h-[100%] bg-gray-100">
      <div>
        <div>
          <Navbar />
        </div>

        <div className="bg-gradient-to-r from-[#014e56] via-[#7eb8be] to-[#004047] background-animate h-[28rem] rounded-lg ml-5 mr-5 mt-[-5rem] md:mt-[-9rem]       /h-[110vh]/  /landscape:h-[150vh]/">
          <div className="xs:items-center xs:justify-center xs:flex xs:flex-col xs:mt-24 xs:text-3xl xs:font-medium xs:landscape:text-5xl sm:pt-[3rem] sm:text-4xl sm:font-extrabold md:flex md:text-6xl md:mt-[10rem] md:items-start md:ml-12 lg:text-7xl xl:landscape:mt-[10rem] xl:landscape:text-5xl ">
            <h1 className="xs:mt-[2rem]">
              Your Problems, <br /> Fixers Closeby...
            </h1>
          </div>

          {/* <form className='xs:items-center xs:justify-center xs:flex xs:flex-col md:flex-row md:absolute md:ml-12'>
                <input className='xs:portrait:w-[13rem] sm:portrait:w-[20rem] md:rounded-r-[0] h-12 landscape:rounded-r-[0px] md2:rounded-l-[4px] md2:w-[18rem] outline-none landscape:rounded-l-[4px] rounded w-[20rem] landscape:w-[20rem] md:w-[25rem] mt-16 pl-5 lg:w-[16rem] lg:landscape:w-[23rem] xl:w-[35rem] 5xl:landscape:w-[23rem]' type="text" placeholder='Enter address'/>
                <Link to='/HomeBody'><button type='submit' className='xs:portrait:w-[13rem] sm:portrait:w-[20rem] border-black border portrait:rounded-[4px] w-[20rem] h-12 landscape:w-auto p-5 gap-6 md:portrait:rounded-l-[0px] md:portrait:w-[10rem] md:portrait:rounded-r-[4px] md2:translate-x-[-4rem] landscape:rounded-r-[4px] xl:landscape:translate-x-[2rem] items-center justify-center flex translate-y-8 landcsape:translate-x-[-3.5rem] font-medium bg-black text-white portrait:hover:bg-gray-700/100 portrait:hover:text-white portrait:hover:font-medium  xs:landscape:ml-[-2rem] portrait:gap-6' > <AiOutlineSearch className='flex-start ml-[-1rem] landscape:ml-[0.1rem]'/> Search</button></Link>
            </form>  



            <div>
              <img src={landingPic} alt="" className='hidden md:hidden md:absolute md:h-52 md:bottom-0 md:right-0 md2:absolute md2:bottom-0 md2:block md2:h-[13rem] md2:landscape:mb-[2rem] md3:h-64 md3:translate-y-0  lg:block lg1:landscape:mb-[2rem] xl:mb-[16rem] 2xl:mb-[25rem] 5xl:relative 5xl:float-right 5xl:mt-[-4rem]' />
              FINISH THE STYLING FOR PICTURE, THEN ADJUST BACKGROUND COLOUR HEIGHT FOR LANDSCAPE DEVICES, MAKE LOGIN FORM SLIGHTLY SMALLER ON SMALL SCREENS AND MAYBE INCREASE SIZE FOR LARGE SCREENS.
            </div> */}

          <div className="flex md:relative flex-wrap items-center md:flex md:flex-col">
            <div className="w-full mt-10">
              <form className="">
                <div className="xs:items-center xs:justify-center xs:flex xs:flex-col md:flex-row md:absolute md:ml-12">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="xs:portrait:w-[13rem] sm:portrait:w-[20rem] md:rounded-r-[0] h-12 landscape:rounded-r-[0px] md2:rounded-l-[4px] md2:w-[18rem] outline-none landscape:rounded-l-[4px] rounded w-[20rem] landscape:w-[20rem] md:w-[25rem] xs:mt-10 md:mt-0 pl-5 lg:w-[16rem] lg:landscape:w-[23rem] xl:w-[35rem] 5xl:landscape:w-[23rem]"
                    placeholder="Enter address"
                  />
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="xs:portrait:w-[13rem] sm:portrait:w-[20rem] border-black border portrait:rounded-[4px] w-[20rem] h-12 landscape:w-auto p-5 gap-6 md:portrait:rounded-l-[0px] md:portrait:w-[10rem] md:portrait:rounded-r-[4px] md2:translate-x-[-4rem] landscape:rounded-r-[4px] xl:landscape:translate-x-[2rem] items-center justify-center flex xs:mt-10 md:mt-0 landcsape:translate-x-[-3.5rem] font-medium bg-black text-white portrait:hover:bg-gray-700/100 portrait:hover:text-white portrait:hover:font-medium  xs:landscape:ml-[-2rem] portrait:gap-6"
                  >
                    <AiOutlineSearch className="flex-start ml-[-1rem] landscape:ml-[0.1rem]" />
                    Search
                  </button>
                </div>
                <div className=" xs:hidden  lg:flex absolute left-12  mt-14">
                  {suggestions.length > 0 && (
                    <ul className="bg-white">
                      {suggestions.map((address) => (
                        <li
                          className={`p-2 cursor-pointer hover:bg-primary hover:text-white flex items-center gap-2 ${
                            suggestions.length !== 1 ? "block" : "hidden"
                          }`}
                          key={address.id}
                          onClick={() => handleSelect(address)}
                        >
                          <span>
                            <GiRoad size={18} />
                          </span>
                          <span className="text-xs font-medium">
                            {suggestions.length === 1 ? "" : address.place_name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </form>
            </div>
            <div className="w-full flex mt-[3rem] landscape:hidden xl:landscape:flex md2:portrait:hidden">
              <img
                className=" xs:hidden lg:flex absolute right-0 md:w-1/2 lg2:w-1/3 lg2:mt-[-12rem] 2xl:w-1/4 p-6"
                src={landingPic}
                alt="your-image-alt"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center">
          <div className="font-bold text-5xl mt-10 ">
            Easily find the businesses for your everyday needs.
          </div>
          <div className="text-3xl font-extralight mt-5 ">{`${landingBodyNames[placeholderIndex]}`}</div>
        </div>

        <div className=" xs:flex xs:flex-col xs:items-center m-auto   flex flex-col items-center md2:flex-row justify-center md:gap-8 mx-5 ">
          <div className="xs:min-w-[18rem] min-w-[23rem] min-h-[25rem] rounded-3xl  mt-[4rem] ">
            <div className="shadow-2xl rounded-b-lg">
              <img
                className="h-[13rem] w-full rounded-t-lg"
                src={electrician}
                alt=""
              />
              <div className="bg-gray-200 min-h-[9rem] w-full flex justify-between rounded-b-lg pt-5">
                <div className="ml-2">
                  <div className="font-light text-2xl ">Top Electrician</div>
                  <div className="mt-[2rem]">1 mile away</div>
                </div>
                <div className="mr-2">
                  ⭐️⭐️⭐️ <span className="font-light">(15 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg mt-4 bg-gray-200 shadow-2xl xs:w-[19rem] w-[28rem] xs:h-[22.5rem] h-[25rem]      ">
            <div className="text-5xl font-extralight text-center pt-[1rem]  text-amber-500">
              Why choose us?
            </div>

            <div className="px-5 ">
              <div className="mt-8 font-normal text-2xl">No more stress!</div>
              <div className="mt-5">1) Find the business that stands out</div>
              <div className="mt-5">
                2) Check the prices and availability times for the services they
                offer
              </div>
              <div className="mt-5">3) And finally contact the business</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingBody;
