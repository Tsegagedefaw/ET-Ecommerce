import { configureStore } from "@reduxjs/toolkit";

import productslice from "./product/productslice";

const Store = configureStore({
    reducer: {
        product: productslice
    },
})
export default Store