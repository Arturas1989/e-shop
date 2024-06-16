import { Menu } from "./Menu";

export type MenuProps = {
    isVisible: boolean;
    setMenuOnLocation?:  (type: keyof Menu) => void;
};