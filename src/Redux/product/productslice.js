import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
        loading: false,
        product: [{
                id: '1',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '2',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '3',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '4',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '5',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '6',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '7',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '8',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '9',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
            {
                id: '10',
                img: 'logo512.png',
                name: 'Iphone 13 proMax',
                price: '$2500',
                rate: 5
            },
        ],
        error: '',
    }
    // 

const fetchproducts = createAsyncThunk(async() => {
    const res = await axios
        .get('https://fakestoreapi.com/products');
    return initialState = res.data
})
const productSlice = createSlice({
    name: 'product',
    initialState: fetchproducts,
    reducers: {
        productlist: (state) => {
            state.numberofproduct--
        },
    },
})

export default productSlice.reducer
export const { ordered, restocked } = productSlice.actions