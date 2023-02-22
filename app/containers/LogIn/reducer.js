import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
    paddingTopView: 50,
    paddingTopHeaderText: 90,
    paddingBottomHeaderText: 10
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setPaddingTopView: (state, action) => {
            state.paddingTopView = action.payload;
        },
        setPaddingTopHeaderText: (state, action) => {
            state.paddingTopHeaderText = action.payload;
        },
        setPaddingBottomHeaderText: (state, action) => {
            state.paddingBottomHeaderText = action.payload;
        },
    },
});

export const { 
    setEmail,
    setPassword,
    setPaddingTopView,
    setPaddingTopHeaderText,
    setPaddingBottomHeaderText
} = loginSlice.actions;

export default loginSlice.reducer;