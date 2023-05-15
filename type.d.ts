export interface Product {
    _id: any;
    title: string;
    brand: string;
    description: string;
    oldPrice: number;
    price: number;
    sizes: string;
    img: [string];
    category: string;
    quantity: number;
}[];

export interface Item {
    _id: any;
    title: string;
    brand: string;
    description: string;
    oldPrice: number;
    price: number;
    sizes: string;
    img: [string];
    category: string;
    quantity: number;
};

export interface StoreProduct {
    _id: number;
    title: string;
    brand: string;
    description: string;
    oldPrice: number;
    price: number;
    sizes: string;
    img: [string];
    category: string;
    quantity: number;
}

export interface UserInfo{
    _id: string;
    name: string;
    email: string;
}