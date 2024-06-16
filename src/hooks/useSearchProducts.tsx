import { useLocation, useSearchParams } from "react-router-dom";
import { useProductsContext } from "../contexts/productContext";
import { Product } from "../types";
import { useEffect, useState } from "react";
import { filterBySearch } from "../utils/helpers";

export const useSearchProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [doSearch, setDoSearch] = useState(false);

  const searchVal = searchParams.get('query') || ''
  const location = useLocation();
  const {products, setProducts, featuredProducts, setFeatured} = useProductsContext()!
  const searchProducts = () => {
    let data: Product[] = [...products!], setData = setProducts;
    if(location.pathname === '/'){
      data = [...featuredProducts!];
      setData = setFeatured;
    }
    const filteredData = filterBySearch(data, searchVal);
    setSearchParams({query: searchVal});
    setData(filteredData);
    setDoSearch(false);
  }
  useEffect(() => {
    const canSearch = searchVal !== '' && products && featuredProducts && doSearch;
    if(canSearch) searchProducts()
    // eslint-disable-next-line
  }, [])

  return {searchProducts, searchParams, setSearchParams, setDoSearch};
}