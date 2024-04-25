// import { Suspense } from "react";
import { Loading } from "../../../components";

type ProductsCountProps = {
  productsCount: number | undefined;
  isLoaded: boolean;
};

export const ProductsCount = ({ productsCount, isLoaded }: ProductsCountProps) => {
  return (
      isLoaded ? <h2>All products ({productsCount})</h2> : <Loading />
  )
};
