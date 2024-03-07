type InputBarProps = {
  placeholder?: string;
  type?: string;
};

export const InputBar = ({ placeholder, type }: InputBarProps) => {
  return (
    <input className="input-bar" type={type} placeholder={placeholder} />
  )
};
