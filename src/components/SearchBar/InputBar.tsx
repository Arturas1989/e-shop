import { useSearchParams } from "react-router-dom";

type InputBarProps = {
  placeholder?: string;
  type?: string;
};

export const InputBar = ({ placeholder, type}: InputBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({query: e.target.value})
  }
  const inputVal = searchParams.get('query') || '';
  return (
    <input 
      onChange={(e) => handleChange(e)} 
      className="input-bar" 
      name="search" 
      type={type} 
      placeholder={placeholder}
      value={inputVal} 
    />
  )
};
