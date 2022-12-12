import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getMe } from './authSlice'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/house`

const initialState = {
    currentHouse: null,
    houses: [],
    housesByZip: []
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
            setHousesByZip: (state, action) => {
                state.housesByZip = action.payload
                return state
            }
        }
    }
)

export default houseSlice.reducer
export const { getHouse, getAllHouses, setHousesByZip} = houseSlice.actions

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
        console.log({ houses })
        dispatch(getAllHouses(houses))
    }
}

export const deleteHouse = ({ hid, jwt }) => {
    return async () => {
        await axios.delete(`${BASE_URL}/${hid}`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
    }
}

export const updateHouse = ({ hid, jwt, payload }) => {
    return async dispatch => {
        await axios.put(`${BASE_URL}/edit-house/${hid}`, payload, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        dispatch(findHouse(hid))
    }
}

export const likeHouseInDb = ({ jwt, houseId, userId }) => {
    return async dispatch => {
        await axios.post(`${BASE_URL}/add-fav-house/${houseId}`, {}, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        dispatch(getMe({ id: userId }))
    }
}

export const unlikeHouseInDb = ({ jwt, houseId, userId }) => {
    return async dispatch => {
        await axios.put(`${BASE_URL}/remove-fav-house/${houseId}`, {}, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        dispatch(getMe({ id: userId }))
    }
}

export const getHousesByZip = ({zip}) => {
    return async dispatch => {
        const res = await axios.get(`${BASE_URL}/get-house-by-zipcode?zip=${zip}`)
        const houses = res.data
        dispatch(setHousesByZip(houses))
    }
}
