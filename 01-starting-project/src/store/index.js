import { createStore } from "redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import counterReducer from "./counterSlice"







const store = configureStore({
    reducer: { counter: counterReducer, user: userReducer }
})





export default store