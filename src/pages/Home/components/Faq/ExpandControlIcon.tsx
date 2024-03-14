type ExpandControlIconProps = {
  className: string;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ExpandControlIcon = ({ className, setIsExpanded }: ExpandControlIconProps) => {
  return (
    <i
      data-testid='expand-control-icon'
      onClick={() => setIsExpanded((prev) => !prev)}
      className={className}
    ></i>
  );
};
