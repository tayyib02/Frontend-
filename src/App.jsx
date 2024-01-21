import LandingBody from "./components/landingPage/LandingBody";
import HomeBody from "./components/homePage/HomeBody";
import ZoomedMain from "./components/zoomedPage/ZoomedMain";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ForgottenPassword,
  forgottenUsername,
} from "./components/authentication/Forgotten";
import BusinessService from "./components/businessServices/BusinessService";
import { useEffect } from "react";
import CheckoutSuccess from "./components/CheckoutSuccess";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/signup" && location.pathname !== "/Login") {
      localStorage.setItem("lastVisitedUrl", location.pathname);
    }
  }, [location.pathname]);
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingBody />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/forgottenPassword" element={<ForgottenPassword />} />
        <Route path="/forgottenUsername" element={<forgottenUsername />} />
        <Route exact path="/Home" element={<HomeBody />} />
        <Route exact path="/ZoomedMain" element={<ZoomedMain />} />
        <Route
          exact
          path="/BusinessServices/:id"
          element={<BusinessService />}
        />
        <Route exact path="/checkout-success" element={<CheckoutSuccess />} />
        {/* <Route exact path="*" element={<CheckoutSuccess />} /> */}
      </Routes>
    </div>
  );
}

export default App;
