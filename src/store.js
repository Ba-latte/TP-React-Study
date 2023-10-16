import { configureStore, createSlice } from "@reduxjs/toolkit";


let popupAddress = createSlice({
    name: "popupAddress",
    initialState: false,
});

let userInfoState = createSlice({
    name : "userInfoState",
    initialState : "",
});

export default configureStore({
    reducer: {
        popupAddress : popupAddress.reducer,
        userInfoState : userInfoState.reducer,
    }
})
