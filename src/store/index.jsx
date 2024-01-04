import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
const store = configureStore({
    reducer:{
        products: userSlice
    }
})

export default store