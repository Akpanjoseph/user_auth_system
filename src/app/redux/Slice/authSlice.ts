import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    value: authState
}

type authState = {
    id: number,
    username: string,
    password: string,
    email: string,
    isAuth: boolean
}


type signup = {
    username: string,
    password: string,
    email: string,
}

const initialState = {
    value: {
        id: 0,
        username: "",
        password: "",
        email: "",
        isAuth: false
    } as authState,
} as initialState


const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },

        signUp: (state, action: PayloadAction<signup>) => {
            return (
                {
                    value: {
                        id: Date.now(),
                        username: action.payload.username,
                        password: action.payload.password,
                        email: action.payload.email,
                        isAuth: true,
                    }
                }
            )
        }
    }
})

export const {logOut,signUp} = auth.actions;

export default auth.reducer; 