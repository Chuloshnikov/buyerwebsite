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
        try {
            const { email } = req.query;
        
            const orders = await Order.find();
        
            const matchingOrders = orders.filter((order) => order.userInfo.some((user) => user.email === email));
        
            res.status(200).json(matchingOrders);
        } catch (error) {
            res.status(500).json(error);
        } 
    }       
}