import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberofproduct: 10,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberofproduct--
        },
        restocked: (state, action) => {
            state.numberofproduct += action.payload
        },
    },
})

export default productSlice.reducer
export const { ordered, restocked } = productSlice.actions