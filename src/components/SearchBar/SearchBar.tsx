import { SecondaryButton, InputBar } from "../../components";
import { useSearchProducts } from "../../hooks/useSearchProducts";

export const SearchBar = () => {
  const {searchProducts} = useSearchProducts()
  return (
    <section className="search">
      <div data-testid='search-bar' className="search-bar">
        <i className="bi bi-search"></i>
        <InputBar type="text" placeholder="Search" />
        <SecondaryButton>
          <i onClick={() => searchProducts()} className="bi bi-search"></i>
        </SecondaryButton>
      </div>
    </section>
  )
};
