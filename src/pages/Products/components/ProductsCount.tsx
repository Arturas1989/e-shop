type ProductsCountProps = {
  productsCount: number | undefined;
};

export const ProductsCount = ({ productsCount }: ProductsCountProps) => {
  return (
    <h2>All products ({productsCount})</h2>
  )
};
