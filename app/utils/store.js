import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../containers/LogIn/reducer";
import signupReducer from "../containers/SignUp/reducer";
import profileReducer from "../containers/Profile/reducer";

const store  = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer,
        profile: profileReducer,
    },
});

export default store;