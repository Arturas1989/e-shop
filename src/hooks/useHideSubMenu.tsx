import { useEffect, useState } from "react";
import { Menu } from "../types";

export const useHideSubMenu = () => {
  const [menu, setMenu] = useState<Menu>({loginMenuVisible: false, searchVisible: false, navigationMenuVisible: false});

  useEffect(() => {
    const hideSubMenu = (e: MouseEvent) => {
      const {target} = e;
      if(target instanceof HTMLElement){
        const notAccountIcon = target.classList.value !== 'bi bi-person-circle';
        if(notAccountIcon && menu.loginMenuVisible) setMenu((prev) => ({...prev, loginMenuVisible: false}));
      }
      
    }
    document.body.addEventListener('click', hideSubMenu);
    return () => document.body.removeEventListener('click', hideSubMenu);
  }, [menu.loginMenuVisible])

  return {menu, setMenu};
}