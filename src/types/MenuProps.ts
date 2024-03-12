export type MenuProps = {
    isVisible: boolean;
    setMenu?: React.Dispatch<React.SetStateAction<{ loginMenuVisible: boolean; searchVisible: boolean; navigationMenuVisible: boolean; }>>;
};