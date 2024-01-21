import { useState } from "react";
import ClientSignupForm from "./ClientSignupForm";
import BusinessSignupForm from "./BusinessSignupForm";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Signup = () => {
  const [isClientSignup, setIsClientSignup] = useState(true);

  const toggleSignupType = () => {
    setIsClientSignup((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-100 ">
      <div className="p-4 flex justify-between items-center gap-6">
        <Link to='/'><img className="h-12" src={logo} alt="" /></Link>
        <button className="bg-gray-200 rounded-lg py-2 px-4 mr-2" onClick={toggleSignupType}>
          {isClientSignup ? "Business Signup" : "Client Signup"}
        </button>
        
      </div>
      {isClientSignup ? <ClientSignupForm /> : <BusinessSignupForm />}

      
    </div>
  );
};

export default Signup;
