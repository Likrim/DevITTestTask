import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../containers/LogIn/reducer";
import textInputReducer from "../components/CTTextInput/reducer";
import signupReducer from "../containers/SignUp/reducer";
import profileReducer from "../containers/Profile/reducer";

const store  = configureStore({
    reducer: {
        login: loginReducer,
        textInput: textInputReducer,
        signup: signupReducer,
        profile: profileReducer,
    },
});

export default store;