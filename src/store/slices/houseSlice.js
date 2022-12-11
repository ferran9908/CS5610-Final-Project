import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/house`

const initialState = {
    currentHouse: null,
    houses: [],
}

const houseSlice = createSlice(
    {
        name: 'houses',
        initialState: initialState,
        reducers: {
            getHouse: (state, action) => {
                state.currentHouse = action.payload;
                return state
            },
            getAllHouses: (state, action) => {
                state.houses = action.payload;
                return state
            },
        }
    }
)

export default houseSlice.reducer
export const { getHouse, getAllHouses } = houseSlice.actions

export const createHouse = ({ payload, jwt }) => {
    return async () => {
        await axios.post(`${BASE_URL}/add-house`, payload, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
    }
}

export const findHouse = (hid) => {
    return async dispatch => {
        const findHouse = await axios.get(`${BASE_URL}/get-house-details/${hid}`)
        const house = findHouse.data
        dispatch(getHouse(house))
    }
}

export const findAllHouses = () => {
    return async dispatch => {
        const findAllHouses = await axios.get(`${BASE_URL}/get-houses`)
        const houses = findAllHouses.data
        dispatch(getAllHouses(houses))
    }
}

export const findSellerHouses = ({ jwt, email }) => {
    return async dispatch => {
        const findSellerHouses = await axios.post(`${BASE_URL}/get-houses`, { email }, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        const houses = findSellerHouses.data
        dispatch(getAllHouses(houses))
    }
}

export const deleteHouse = (hid) => {
    return async dispatch => {
        await axios.delete(`${BASE_URL}/${hid}`)
    }
}

export const updateHouse = ({hid, jwt, payload}) => {
    return async dispatch => {
         await axios.put(`${BASE_URL}/edit-house/${hid}`,  payload, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        dispatch(findHouse(hid))
}}

