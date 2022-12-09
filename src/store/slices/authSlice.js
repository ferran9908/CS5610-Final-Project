import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

const initialState = { jwt: null }

export const AuthSlice = createSlice({
    name: 'auth',
    reducers: {
        authenticateUser: (state, action) => {
            state.jwt = action.payload
            return state
        },
        logout: () => {
            return { jwt: null }
        }
    },
    initialState
})

export const { authenticateUser, logout } = AuthSlice.actions

export default AuthSlice.reducer


export const signUp = (payload) => {
    return async (dispatch) => {
        await axios.post(`${BASE_URL}/user/signup`, payload)
        const signInResponse = await axios.post(`${BASE_URL}/user/login`, {
            email: payload.email,
            password: payload.password
        })
        const jwt = signInResponse.data.jwt
        dispatch(authenticateUser(jwt))
    }
}

export const signIn = (payload) => {
    return async dispatch => {
        const signInResponse = await axios.post(`${BASE_URL}/user/login`, {
            email: payload.email,
            password: payload.password
        })
        const jwt = signInResponse.data.jwt
        dispatch(jwt)
    }
}