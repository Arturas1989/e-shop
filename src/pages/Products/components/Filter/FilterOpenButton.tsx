type FilterOpenButtonProps = {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FilterOpenButton = ({setIsVisible}: FilterOpenButtonProps) => {
  return (
    <button data-testid="filter-open" onClick={() => setIsVisible(prev => !prev)} className="filter-toggle">
      <i className="bi bi-three-dots-vertical"></i>
    </button>
  )
};
