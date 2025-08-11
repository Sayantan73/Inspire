import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authLoginContext: (state, action) => {
            state.status = true;
            state.userData = action.payload
        },
        authLogoutContext: (state) => {
            state.status = false;
            state.userData = null
        }
    }
})

export const { authLoginContext, authLogoutContext } = authSlice.actions;
export default authSlice.reducer