import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getCurrentUserData } from './authSlice'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

const initialState = { profile: null, error: null, profiles: [] }

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
            return state
        },
        setProfile: (state, action) => {
            state.profile = action.payload
            return state
        },
        getAllProfiles: (state, action) => {
            state.profiles = action.payload;
            return state
        }
    },
})

export const { setError, setProfile, getAllProfiles } = ProfileSlice.actions

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

export const editProfile = ({ name, email, role, jwt }) => async dispatch => {
    try {
        await axios.put(`${BASE_URL}/user/edit-profile`, { name, email, role }, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        dispatch(getCurrentUserData(jwt))
    } catch (e) {
        console.error({ error: e })
    }

}

export const findAllProfiles = (jwt) => {
    return async dispatch => {
        const findAllProfiles = await axios.get(`${BASE_URL}/user/get-all-users`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        const profiles = findAllProfiles.data
        dispatch(getAllProfiles(profiles))
    }
}

export const deleteUserFromDb = ({ jwt, userId }) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${BASE_URL}/user/remove-user?id=${userId}`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            console.log({ response })
            dispatch(findAllProfiles(jwt))
        } catch (e) {
            console.error({ error: e })
        }
    }
}

