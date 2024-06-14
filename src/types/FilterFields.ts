export type Star = '1' | '2' | '3' | '4' | '';


export type FilterFields = {
    query: string,
    price: string;
    stars: Star;
    best_seller: string;
    in_stock: string;
};