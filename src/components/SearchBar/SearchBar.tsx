import { SecondaryButton, InputBar } from "../../components";

type SearchBarProps = {
  name?: string;
};

export const SearchBar = ({ name }: SearchBarProps) => {
  return (
    <div data-testid='search-bar' className="search-bar">
      <i className="bi bi-search"></i>
      <InputBar type="text" placeholder="Search" />
      <SecondaryButton>
        <i className="bi bi-search"></i>
      </SecondaryButton>
    </div>
  )
};
