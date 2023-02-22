import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHide: true,
};

export const textInputSlice = createSlice({
    name: "textInput",
    initialState,
    reducers: {
        setIsHide: state => {
            state.isHide = !state.isHide;
        },
    },
});

export const { setIsHide } = textInputSlice.actions;

export default textInputSlice.reducer;