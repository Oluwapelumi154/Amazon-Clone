import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
};
const cartSlices = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        Add_cartItem: (state, { payload }) => {
            state.cartItems = [...state.cartItems, payload];
        },
        Remove_cartItem: (state, { payload }) => {
            state.carItems = state.cartItems.filter(
                (item) => item._id !== payload.id
            );
        },
    },
});
export const { Add_cartItem, Remove_cartItem } = cartSlices.actions;
export default cartSlices.reducer;
