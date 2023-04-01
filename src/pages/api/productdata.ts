import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
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


const productData = [
    {
        _id: 1,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: [
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
            ],
        category: "Boots",
        quantity: 0,
    },
    {
        _id: 2,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: [
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
            ],
        category: "Boots",
        quantity: 0,
    },
    {
        _id: 3,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: [
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
            ],
        category: "Boots",
        quantity: 0,
    },
    {
        _id: 4,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: [
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
            ],
        category: "Boots",
        quantity: 0,
    },
    {
        _id: 5,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: [
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
            ],
        category: "Boots",
        quantity: 0,
    },
    {
        _id: 6,
        title: "Lether Boots",
        brand: "Italia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perspiciatis harum iste libero fuga architecto totam molestias aspernatur reprehenderit maxime fugiat minima repudiandae nostrum non ullam laborum ea, numquam voluptate!",
        oldPrice: 99,
        price: 55,
        sizes: "XS XL XXL",
        img: [  
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
                "https://i.ibb.co/BNXTLkq/12.webp",
            ],
        category: "Boots",
        quantity: 0,
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(productData);
}