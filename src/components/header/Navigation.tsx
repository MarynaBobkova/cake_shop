import React from "react";
import NavItem from "./NavItem";
import { navItemsR } from "../../utils/constants";
import { navItemsL } from "../../utils/constants";

interface NavProps {
  onPageChange: (newPage: string) => void;
}

const Navigation: React.FC<NavProps> = ({ onPageChange }) => {
  return (
    <nav>
      <ul className='buttonsRight-class'>
        {navItemsL.map((e, index) => (
          <NavItem
            key={index}
            item={e.item}
            path={e.path}  
            onClick={() => onPageChange(e.path)}
          />
        ))}
      </ul>
      
      <ul className='buttonsLeft-class'>
      <li className='nav-item'>
      <div className="phone-wrapper">
            +4915111019999
          </div>
        {navItemsR.map((e, index) => (
          <NavItem
            key={index}
            item={e.item}
            path={e.path}  
            onClick={() => onPageChange(e.path)}
          />
        ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;