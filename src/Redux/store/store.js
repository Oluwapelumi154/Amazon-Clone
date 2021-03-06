import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";
const store = configureStore({
    reducer: {
        cartItems: cartReducer,
    },
});
export default store;
