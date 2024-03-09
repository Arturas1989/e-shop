import { SecondaryButton, InputBar } from "../../components";

type SearchBarProps = {
  name?: string;
};

export const SearchBar = ({ name }: SearchBarProps) => {
  return (
    
    <section className="search">
      <div data-testid='search-bar' className="search-bar">
        <i className="bi bi-search"></i>
        <InputBar type="text" placeholder="Search" />
        <SecondaryButton>
          <i className="bi bi-search"></i>
        </SecondaryButton>
      </div>
    </section>
  )
};
