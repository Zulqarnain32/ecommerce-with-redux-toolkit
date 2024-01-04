import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    // addProduct(state, action) {
    //   return [...state, { ...action.payload, qty: 1 }];
    // },
    addProduct(state, action) {
      //console.log(action.payload);// complete single product will print
       console.log(action.payload.name);
       console.log(action.payload.price);
       
      const existingProduct = state.find((prod) => 
        prod.id === action.payload.id
      );

      if (existingProduct) {
        // If the product already exists, update the quantity
        existingProduct.qty += 1;
      } else {
        // If the product doesn't exist, add a new entry
        state.push({ ...action.payload, qty: 1 });
      }
    },
    incrProduct(state, action) {
      const index = state.findIndex((prod) => prod.id === action.payload);
      if (index !== -1) {
        state[index].qty += 1;
      }
    },
    decrProduct(state, action) {
      const index = state.findIndex((prod) => prod.id === action.payload);
      if (index !== -1 && state[index].qty > 1) {
        state[index].qty -= 1;
      }
    },
    removeProduct(state, action) {
      return state.filter((prod) => prod.id !== action.payload);
    },
  },
});

export const { addProduct, incrProduct, decrProduct, removeProduct } =
  userSlice.actions;
export default userSlice.reducer;
