import { useEffect, useState } from "react";
import { Menu } from "../types";
import { useLocation } from "react-router-dom";

export const useHideSubMenu = () => {
  const [menu, setMenu] = useState<Menu>({loginMenuVisible: false, searchVisible: false, navigationMenuVisible: false});
  const location = useLocation();
  const {pathname} = location;
  useEffect(() => {
    const hideSubMenu = (e: MouseEvent) => {
      const {target} = e;
      if(target instanceof HTMLElement){
        const notAccountIcon = target.classList.value !== 'bi bi-person-circle';
        if(notAccountIcon && menu.loginMenuVisible) setMenu((prev) => ({...prev, loginMenuVisible: false}));
      }
    }
    if(pathname === '/cart') setMenu((prev) => ({...prev, searchVisible: false}))
    document.body.addEventListener('click', hideSubMenu);
    return () => document.body.removeEventListener('click', hideSubMenu);
  }, [menu.loginMenuVisible, pathname])

  const setMenuOnLocation = (type: keyof Menu) => {
    if(type === 'searchVisible') {
      setMenu((prev) => ({...prev, loginMenuVisible: false, searchVisible: pathname === '/cart' ? false: !prev.searchVisible}))
    } 
    if(type === 'navigationMenuVisible') {
      setMenu((prev) => ({...prev, navigationMenuVisible: !prev.navigationMenuVisible, searchVisible: prev.navigationMenuVisible ? false : prev.searchVisible}))
    }
    if(type === 'loginMenuVisible') {
      setMenu((prev) => ({...prev, loginMenuVisible: !prev.loginMenuVisible, searchVisible: false}))
    }
  }
  return {menu, setMenuOnLocation};
}