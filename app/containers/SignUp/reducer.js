import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    countryCode: "+1",
    number: ""
};

export const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        setName: ((state, action) => {
            state.name = action.payload;
        }),
        setEmail: ((state, action) => {
            state.email = action.payload;
        }),
        setPassword: ((state, action) => {
            state.password = action.payload;
        }),
        setConfirmPassword: ((state, action) => {
            state.confirmPassword = action.payload;
        }),
        setCountryCode: ((state, action) => {
            state.countryCode = action.payload;
        }),
        setNumber: ((state, action) => {
            state.number = action.payload;
        }),
        setDefault: (state => {
            state.name = initialState.name;
            state.email = initialState.email;
            state.password = initialState.password;
            state.confirmPassword = initialState.confirmPassword;
            state.number = initialState.number;
        })
    },
});

export const { 
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setCountryCode,
    setNumber,
    setDefault,
} = signupSlice.actions;

export default signupSlice.reducer;