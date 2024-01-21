import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { ForgottenPassword } from "./Forgotten";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/auth";
import { toast } from "react-toastify";


export default function BusinessLogin() {
    const [BusinessEmail, setEmail] = useState("");
  const [BusinessPassword, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const makeToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("Inside Business login");
    e.preventDefault();
    const formData = {
        BusinessEmail: BusinessEmail,
        BusinessPassword: BusinessPassword,
    };
    try {
      //  Send a POST request to the server with the form data
      const response = await fetch("http://localhost:5500/api/v1/business/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      //  If the response is OK, show a success message
      if (response){
        alert("Thanks for signing in!");
        
      } else {
        //  Otherwise, show an error message
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    }
    

  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(localStorage.getItem("lastVisitedUrl") || "/");
      // console.log("logged in");
      makeToast("Login Successful");
    }
  }, [isLoggedIn]);
  useEffect(() => {
    console.log(error?.message);
  }, [error]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 xl:max-w-2xl mx-auto">
      <div className="flex flex-col items-center my-5">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 md:p-10 w-full  landscape:md2:w-[80%] rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-8">Business Login</h2>
            <Link
              to="/signup"
              className="block text-sm text-black font-light mb-7"
            >
              {" "}
              Create an account?{" "}
            </Link>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-black font-bold mb-2"
            >
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              value={BusinessEmail}
              placeholder="email@example.com"
              onChange={handleEmailChange}
              className="border-gray-400 border-2 p-2 w-full rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-black font-bold mb-2"
            >
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              id="password"
              minLength={8}
              placeholder="••••••••"
              value={BusinessPassword}
              onChange={handlePasswordChange}
              className="border-gray-400 border-2 p-2 w-full rounded-lg"
              required
            />
          </div>
          {error && (
            <div className="text-red-500 font-bold text-center mb-2">
              {error?.message}
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-3 bg-[#014e56] hover:bg-[#062c30] text-white font-bold rounded-lg"
            >
              Continue
            </button>
            <Link
              to="/forgottenPassword"
              className="block mt-4 text-sm text-black font-light"
            >
              Forgotten your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
