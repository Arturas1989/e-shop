import { RatingNum } from "../../../types";

type RatingProps = {
  stars: RatingNum;
};

export const Rating = ({ stars }: RatingProps) => {
  return (
    <div className="rating">

      {Array.from({length: stars}, (_,i) => (
        <i key={i} className="bi bi-star-fill"></i>
      ))}

      {Array.from({length: 5 - stars}, (_,i) => (
        <i key={i} className="bi bi-star"></i>
      ))}
      
    </div>
  )
};
