import { StoreProduct, UserInfo } from './../type.d';
import { createSlice } from '@reduxjs/toolkit';

interface BuyerState {
    productData: StoreProduct[];
    userInfo: null | UserInfo;
}


const initialState: BuyerState = {
    productData: [],
    userInfo: null,
};

export const buyerslice = createSlice({
    name: 'buyer',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find(
                (item: StoreProduct) => item._id === action.payload._id
                );
            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload);
            }   
        },
        plusQuantity: (state, action) => {
            const item = state.productData.find(
                (item: StoreProduct) => item._id === action.payload._id
            );

            if (item) {
                item.quantity++;
            }
        },
        minusQuantity: (state, action) => {
            const item = state.productData.find(
                (item: StoreProduct) => item._id === action.payload._id
            );

            if (item?.quantity === 1) {
                item.quantity = 1;
            } else {
                item!.quantity--;
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
    }
})

export const { addToCart, deleteItem, plusQuantity, minusQuantity, resetCart} = buyerslice.actions;
export default buyerslice.reducer;