import { Author } from "./author";

export interface Book 
{
    id?:string;
    title:string;
    plot:string;
    year:number;
    price:number;
    quantity:number;
    cover:string|null;
    author:Author;
}
