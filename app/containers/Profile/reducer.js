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
        },
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.image = action.payload.image;
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.position = action.payload.position;
            state.skype = action.payload.skype;
        },
        setDefault: state => {
            state.email = initialState.email;
            state.image = initialState.image;
            state.name = initialState.name;
            state.phone = initialState.phone;
            state.position = initialState.position;
            state.skype = initialState.skype;
        }
    },
});

export const { 
    setImage,
    setName,
    setEmail,
    setPhone,
    setPosition,
    setSkype,
    setUser,
    setDefault
} = profileSlice.actions;

export default profileSlice.reducer;