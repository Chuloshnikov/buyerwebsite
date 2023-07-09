import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import axios from "axios";

const CustomerOrders = () => {
    const userInfo = useSelector((state: any) => state.buyer.userInfo);
    const [orders, setOrders] = useState<any>();
    console.log(orders);

    useEffect(() => {
        axios.get(`/api/orderdata?email=${userInfo?.email}`).then(response => {
            setOrders(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div>
            {/* Відображення списку замовлень */}
            {orders && orders.map((order: any) => (
                <div key={order._id}>
                    {order.clientName}
                </div>
            ))}
        </div>
    );
};

export default CustomerOrders;