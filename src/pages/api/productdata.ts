import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    _id: number;
    title: string;
    manufacturer: string;
    description: string;
    oldPrice: number;
    price: number;
    sizes: string;
    img: string;
    category: string;
}[];


const productData = [
    {
        _id: 1,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: '../assets/images/stuf.webp',
        category: "Boots"
    },
    {
        _id: 1,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: '../assets/images/stuf.webp',
        category: "Boots"
    },
    {
        _id: 1,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: '../assets/images/stuf.webp',
        category: "Boots"
    },
    {
        _id: 1,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: '../assets/images/stuf.webp',
        category: "Boots"
    },
    {
        _id: 1,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: '../assets/images/stuf.webp',
        category: "Boots"
    },
    {
        _id: 1,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: '../assets/images/stuf.webp',
        category: "Boots"
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({productData});
}