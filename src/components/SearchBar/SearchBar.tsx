import { SecondaryButton, InputBar } from "../../components";

export const SearchBar = () => {
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
