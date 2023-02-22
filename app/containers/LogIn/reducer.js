import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailLogin: "",
    password: "",
    paddingTopView: 50,
    paddingTopHeaderText: 90,
    paddingBottomHeaderText: 10
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginEmail: (state, action) => {
            state.emailLogin = action.payload;
        },
        setLoginPassword: (state, action) => {
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
        setLoginDefault: state => {
            state.emailLogin = initialState.emailLogin;
            state.password = initialState.password;
        }
    },
});

export const { 
    setLoginEmail,
    setLoginPassword,
    setPaddingTopView,
    setPaddingTopHeaderText,
    setPaddingBottomHeaderText,
    setLoginDefault
} = loginSlice.actions;

export default loginSlice.reducer;