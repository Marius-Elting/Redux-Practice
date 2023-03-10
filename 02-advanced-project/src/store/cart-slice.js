import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmout: 0
    },
    reducers: {
        addItemToCard(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++
            if (!existingItem) {
                state.items.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title })
                state.totalAmout += newItem.price
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
                state.totalAmout += newItem.price
            }
        },
        removeItemFromCart(state, action) {
            state.totalQuantity--
            const toRemoveItem = state.items.find(item => item.id === action.payload)
            if (toRemoveItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload)
                state.totalAmout += toRemoveItem.price
            } else {
                state.totalAmout += toRemoveItem.price
                toRemoveItem.quantity--
                toRemoveItem.totalPrice = toRemoveItem.totalPrice - toRemoveItem.price

            }
        }
    }
})
export const cartActions = cartSlice.actions

export default cartSlice