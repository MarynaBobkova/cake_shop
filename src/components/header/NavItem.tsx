import React from "react";
import { Link } from "react-router-dom";


interface NavItemProps {
  item: string;
  path: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, path, onClick }) => {
  return (
    
    <Link to={path} className="btn button" onClick={onClick} >
      {item}
    </Link>
  );
};

export default NavItem;
