import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: null,
    name: "",
    email: "",
    phone: "",
    position: "",
    skype: "",
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setPosition: (state, action) => {
            state.position = action.payload;
        },
        setSkype: (state, action) => {
            state.skype = action.payload;
        }
    },
});

export const { 
    setImage,
    setName,
    setEmail,
    setPhone,
    setPosition,
    setSkype
} = profileSlice.actions;

export default profileSlice.reducer;