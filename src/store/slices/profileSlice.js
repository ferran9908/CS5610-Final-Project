import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

const initialState = { profile: null, error: null }

export const ProfileSlice = createSlice({
    name: 'profile',
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
            return state
        },
        setProfile: (state, action) => {
            state.profile = action.payload
            return state
        }
    },
    initialState
})

export const { setError, setProfile } = ProfileSlice.actions

export default ProfileSlice.reducer

export const fetchUserById = (id) => async dispatch => {
    try {
        const userResponse = await axios.get(`${BASE_URL}/user/fetch-user?id=${id}`)
        const user = userResponse.data
        dispatch(setProfile(user))
    } catch (e) {
        console.error({ error: e })
    }
}