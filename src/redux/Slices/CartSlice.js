import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add: (state,action) => {
            state.push(action.payload);
        },
        remove: (state,action) => {
            return state.filter((item) => item.id !== action.payload);  //only retain those items in this state jo input parameter m jo id aayi h uske equal na ho..
        }
    }
})

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;