import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

const initialState = { jwt: null, error: null, user: null }

export const AuthSlice = createSlice({
    name: 'auth',
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
            return state
        },
        authenticateUser: (state, action) => {
            state.jwt = action.payload.jwt
            state.user = action.payload.user
            state.error = null
            return state
        },
        // setUser: (state, action) => {
        //     console.log({ payload: action.payload })
        //     state.user = action.payload
        //     return state
        // },
        logout: () => {
            return { jwt: null, error: null, user: null }
        }
    },
    initialState
})

export const { authenticateUser, logout, setError } = AuthSlice.actions

export default AuthSlice.reducer


export const signUp = (payload) => {
    return async (dispatch) => {
        await axios.post(`${BASE_URL}/user/signup`, payload)
        const signInResponse = await axios.post(`${BASE_URL}/user/login`, {
            //Pass json 
            email: payload.email,
            password: payload.password
        })
        const jwt = signInResponse.data.jwt
        const user = signInResponse.data.user
        dispatch(authenticateUser({ jwt, user }))
    }
}

export const signIn = (payload) => {
    return async dispatch => {
        try {
            const signInResponse = await axios.post(`${BASE_URL}/user/login`, {
                email: payload.email,
                password: payload.password
            })
            const jwt = signInResponse.data.jwt
            const user = signInResponse.data.user
            dispatch(authenticateUser({ jwt, user }))
        } catch (e) {
            console.log(e.response.data)
            dispatch(setError(e.response.data.error))
        }
    }
}

export const getCurrentUserData = (jwt) => {
    return async dispatch => {
        try {
            const userResponse = await axios.get(`${BASE_URL}/user/fetch-edited-user`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            const user = userResponse.data
            console.log({ user })
            dispatch(authenticateUser(user))
        } catch (e) {
            console.error({ error: e })
        }
    }
}