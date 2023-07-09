import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import FormatePrice from './FormatePrice';
import Image from 'next/image';
import axios from "axios";
import Spinner from './Spinner';

const CustomerOrders = () => {
    const userInfo = useSelector((state: any) => state.buyer.userInfo);
    const [orders, setOrders] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    console.log(orders);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`/api/orderdata?email=${userInfo?.email}`).then(response => {
            setOrders(response.data);
            setIsLoading(false);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const orderStatus = (status) => {
        if (status === 0) {
          return "прийнятий";
        } else if (status === 1) {
          return "відправлений";
        } else if (status === 2) {
          return "отримано";
        } else if (status === 3) {
          return "скасовано";
        }
        return "unknown";
      };

    return (
        <div className='max-w-contentContainer shadow-bannerShadow w-full text-gray-800'>
            {/* Відображення списку замовлень */}
            {isLoading && <Spinner/>}
            {orders.length ? (<TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Замовлення</TableCell>
                        <TableCell align="right">Сумма замовлення</TableCell>
                        <TableCell align="right">Відділення НП</TableCell>
                        <TableCell align="right">Статус замовлення</TableCell>
                        <TableCell align="right">Номер ТТН</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders?.map((order: any) => (
                        <TableRow
                        key={order._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {order.productData?.map((product) => (
                                <div 
                                className='flex gap-2'
                                key={product.title}>
                                    <span>{product.title} |</span>
                                    <span>{product.brand} |</span>
                                    <span><FormatePrice amount={product.price}/></span>
                                </div>
                            ))}
                        </TableCell>
                        <TableCell align="right"><FormatePrice amount={order.amount}/></TableCell>
                        <TableCell align="right">{order.newPost}</TableCell>
                        <TableCell align="right">{orderStatus(order.status)}</TableCell>
                        <TableCell align="right">{order.invoice === "not specified" ? "очікуйте на номер ТТН" : order.invoice}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
    </TableContainer>) : (
                <div className='flex items-center text-center justify-center py-5'>
                    <h3 className='font-bold text-2xl'>У Вас ще нема замовлень</h3>
                </div>
                )
            }
        </div>
    );
};

export default CustomerOrders;