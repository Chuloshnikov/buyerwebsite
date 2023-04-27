import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import dbConnect from "../../../lib/dbConnect";


type Data = {
    _id: number;
    title: string;
    brand: string;
    description: string;
    oldPrice: number;
    price: number;
    sizes: string;
    img: string[];
    category: string;
    quantity: number;
}[];




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const  {method} = req;
    
    await dbConnect();

    switch (method) {
        case "GET": {
            try {
                const products = await Product.find();
                res.status(200).json(products);
            } catch (error) {
                res.status(500).json(error);
            }
        }
        break;

        case "POST": {
            try {
                const productdata = await Product.create(req.body); 
                res.status(201).json(productdata);
            } catch (error) {
                res.status(500).json(error)
            }
        }
        break;
    }
    
}