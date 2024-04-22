import { RatingNum } from '../../RatingNum';

export type Product = {
  name: string;
  description: string;
  price: number;
  rating: RatingNum;
  best_seller: boolean;
  img_name: string;
  isFeatured: boolean;
};
