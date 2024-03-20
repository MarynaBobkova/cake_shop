import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Contacts from "../pages/Contacts";
import Basket from "../pages/Basket";
import LogIn from "../pages/LogIn";


interface MyProps {
  page: string;
}

const Main: React.FC<MyProps> = ({ page }) => {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
  )
  // switch (page) {
  //   case navItems[0]:
  //     return <Home />;
  //   case navItems[1]:
  //     return <AboutMe />;
  //   case navItems[2]:
  //     return <StarWars />;
  //   default:
  //     return <Contacts />;
  // }
};

export default Main;
