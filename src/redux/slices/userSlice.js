import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default userSlice.reducer;
