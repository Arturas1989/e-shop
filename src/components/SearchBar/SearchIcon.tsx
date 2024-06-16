import { useLocation } from "react-router-dom";
import { Menu } from "../../types";

type SearchIconProps = {
  setMenuOnLocation: (type: keyof Menu) => void;
};

export const SearchIcon = ({ setMenuOnLocation }: SearchIconProps) => {
  const location = useLocation();
  const className = `bi bi-search ${location.pathname === '/cart' ? 'disabled' : ''}`
  console.log(className)
  return (
    <i data-testid="search-icon2" className={className} onClick={() => setMenuOnLocation!('searchVisible')}></i>
  )
};

