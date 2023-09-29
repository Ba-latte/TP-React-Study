import { configureStore, createSlice } from "@reduxjs/toolkit";


let popupAddress = createSlice({
    name: "popupAddress",
    initialState: false,
});

export default configureStore({
    reducer: {
        popupAddress : popupAddress.reducer,
    }
})
