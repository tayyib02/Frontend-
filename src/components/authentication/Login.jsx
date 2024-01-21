import { useState } from "react";

import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import UserLoginForm from "./UserLoginForm";
import BusinessLogin from "./BusinessLogin";

const LoginPage = () => {
  const [isClientLogin, setIsClientLogin] = useState(true);

  const toggleSignupType = () => {
    setIsClientLogin((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-100 ">
      <div className="p-4 flex justify-between items-center gap-6">
        <Link to='/'><img className="h-12" src={logo} alt="" /></Link>
        <button className="bg-gray-200 rounded-lg py-2 px-4 mr-2" onClick={toggleSignupType}>
          {isClientLogin ? "Business Login" : "Client Login"}
        </button>
        
      </div>
      {isClientLogin ? <UserLoginForm /> : <BusinessLogin />}

      
    </div>
  );
};

export default LoginPage;
