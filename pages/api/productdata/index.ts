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
    img: [string];
    category: string;
    quantity: number;
}[];




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const  {method} = req;
    
    await dbConnect();

    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Product.findOne({_id: req.query.id}));
        } else {
            res.json(await Product.find());
        }
    
    }

       

        if (method === 'POST')  {
            try {
                const productdata = await Product.create(req.body); 
                res.status(201).json(productdata);
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
