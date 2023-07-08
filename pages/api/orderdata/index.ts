import type { NextApiRequest, NextApiResponse } from "next";
import Order from "../../../models/Order";
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

    if (method === 'POST')  {
        try {
            const {
                orderId, 
                productData, 
                userInfo, 
                amount, 
                clientName, 
                clientLastName, 
                clientPhone, 
                newPost, 
                paymentMethod, 
                status, 
                invoice
            } = req.body;
            const orderdata = await Order.create({
                orderId, 
                productData, 
                userInfo, 
                amount, 
                clientName, 
                clientLastName, 
                clientPhone, 
                newPost, 
                paymentMethod, 
                status,
                invoice
            }); 
            res.status(201).json(orderdata);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Product.findOne({_id: req.query.id}));
        } else {
            res.json(await Product.find());
        }
    
    }

       

        
    }
