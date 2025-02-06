import reducer, { CartSlice } from "./Slices/CartSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        cart : CartSlice.reducer     // key m hmra jo bhi name hota h slice ka wo aata h
    }
});