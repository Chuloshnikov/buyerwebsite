export interface Product {
    _id: number;
    title: string;
    manufacturer: string;
    description: string;
    oldPrice: number;
    price: number;
    sizes: string;
    img: Array<string>;
    category: string;
    quantity: number;
}[];

export interface Item {
    _id: number;
    title: string;
    manufacturer: string;
    description: string;
    oldPrice: number;
    price: number;
    sizes: string;
    img: Array<string>;
    category: string;
    quantity: number;
};