type BestSellerProps = {
  isBestSeller: boolean;
};

export const BestSeller = ({ isBestSeller }: BestSellerProps) => {
  return (
    isBestSeller ? <div className="best-seller">best seller</div> : null
  )
};
