import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home"; 
import removeFromCart from "../pages/Home";
import selectedProducts from "../pages/Home";
import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Contacts from "../pages/Contacts";
import Basket from "../pages/Basket";
import LogIn from "../pages/LogIn";
import Fillings from "../pages/Fillings";
import Reviews from "../pages/Reviews";

interface MyProps {
  page: string;
}

const Main: React.FC<MyProps> = ({ page }) => {

  const selectedProducts = [{ title: "Dummy Product", quantity: 1 }];
  const removeFromCart = (index: number) => {
    console.log("Remove from cart", index);
  };
  return (
    <Routes>
      <Route path="/" element={<Home selectedProducts={[]} removeFromCart={function (index: number): void {
        throw new Error("Function not implemented.");
      } } />} />
      <Route path="/about" element={<About />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/contacts" element={<Contacts />} />      
      <Route
        path="/basket"
        element={<Basket selectedProducts={selectedProducts} removeFromCart={removeFromCart} />}
      />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/fillings" element={<Fillings />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default Main;