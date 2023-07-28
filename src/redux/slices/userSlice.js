import { removeUserCookies, setUserCookies } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    credentials: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        onRegister: (state, action) => {
            state.user = action.payload;
        },
        onLogin: (state, action) => {
            state.credentials = action.payload;
            setUserCookies(action.payload);
        },
        onLogout: (state) => {
            state.user = null;
            state.credentials = null;
            removeUserCookies();
        },
    },
});

export const { onRegister, onLogin, onLogout } = userSlice.actions;
export default userSlice.reducer;
