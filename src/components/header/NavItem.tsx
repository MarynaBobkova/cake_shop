import React from "react";
import { Link } from "react-router-dom";


interface NavItemProps {
  item: string;
  path: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, path, onClick }) => {
  return (
    <Link to={path} className="nav-item btn btn-danger" onClick={onClick} >
      {item}
    </Link>
  );
};

export default NavItem;
