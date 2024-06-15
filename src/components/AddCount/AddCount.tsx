import { useCartContext } from "../../contexts/cartContext";
import { setProductQuantity } from "../../services/Cart";
import { Product } from "../../types";
import { isNumber } from "../../utils/helpers";

type AddCountProps = {
  count: number | string;
  setCount: React.Dispatch<React.SetStateAction<number | string>>;
  id: string;
};

export const AddCount = ({ setCount, count, id }: AddCountProps) => {

  let context = useCartContext();
  let products: Product[] | null = [];
  let setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;

  if(context){
    products = context!.products;
    setProducts = context!.setProducts;
  } 

  const handleIncrease = () => {
    setCount(prev => +prev + 1)
    setProductQuantity(products, +count + 1, setProducts, id);
  }

  const handleDecrease = () => {
    const newCount =  Math.max(+count - 1, 1);
    setCount(newCount);
    setProductQuantity(products, newCount, setProducts, id);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if(isNumber(val)){
      setCount(val);
      setProductQuantity(products, val, setProducts, id);
    } 
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if(val === '') setCount(1);
  }
  return (
    <div className="addCount">
      <button onClick={() => handleIncrease()} className="count-control">+</button>
      <input 
        id={id} 
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        className="addInput" 
        type="text" 
        min={1} 
        value={count} 
      />
      <button onClick={() => handleDecrease()} className="count-control">-</button>
    </div>
  )
};
