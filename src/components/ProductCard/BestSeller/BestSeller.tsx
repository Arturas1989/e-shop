type BestSellerProps = {
  isBestSeller: boolean;
};

export const BestSeller = ({ isBestSeller }: BestSellerProps) => {
  return (
    <div className={isBestSeller ? 'best-seller' : 'best-seller not-visible'}>best seller</div>
  )
};
