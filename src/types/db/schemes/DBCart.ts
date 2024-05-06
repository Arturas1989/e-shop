import { Timestamp } from "firebase/firestore";

export type DBCart = {
    userId: string;
    products: string;
    timestamp: Timestamp;
};

export type CartProducts = {[key: string] : number};