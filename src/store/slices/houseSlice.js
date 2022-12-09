import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/house`

const initialState = {
    currentHouse: null,
    houses: [],
    loading: true
}

const houseSlice = createSlice(
    {
        name: 'houses',
        initialState: initialState,
        reducers:{
            getHouse: (state, action) => {
                state.currentHouse = action.payload;
                return state
            },

            getAllHouses: (state, action) => {
                state.houses = action.payload;
                return state
            }
        }
    }
)

export default houseSlice.reducer
export const { getHouse, getAllHouses } = houseSlice.actions

export const createHouse = (payload) => {
    return async dispatch => {
        const createHouseResponse = await axios.post(`${BASE_URL}/add-house`, payload
        )
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

export const deleteHouse = (hid) => {
    return async dispatch => {
        const deleteHouse = await axios.get(`${BASE_URL}/${hid}`)
    }

}


