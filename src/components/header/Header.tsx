import React from "react";
import Navigation from "./Navigation";

interface HeaderProps {
  onPageChange: (newPage: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onPageChange }) => {
  return (
    <header>
       
      <Navigation onPageChange={onPageChange} />
      <h1 className='text-center header' >British Bakery</h1>
    </header>
    
  //    <header>
  //    <h1>British Bakery</h1>
  //    <nav>
  //      <ul>
  //        <li>
  //          <Link to="/" onClick={() => onPageChange('/')}>Home</Link>
  //        </li>
  //        <li>
  //          <Link to="/about" onClick={() => onPageChange('/about')}>About us</Link>
  //        </li>
  //        <li>
  //          <Link to="/delivery" onClick={() => onPageChange('/delivery')}>Delivery</Link>
  //        </li>
  //        <li>
  //          <Link to="/contacts" onClick={() => onPageChange('/contacts')}>Contacts</Link>
  //        </li>
  //        <li>
  //          <Link to="/basket" onClick={() => onPageChange('/basket')}>Basket</Link>
  //        </li>
  //      </ul>
  //    </nav>
  //  </header>
  );
};

export default Header;
