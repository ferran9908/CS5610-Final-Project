import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getAllHouses } from "./houseSlice";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/booking`

const initialState = {
    bookings: [],
    bookingsBuyer: [],
    bookingsSeller: []
}

export const BookingSlice = createSlice({
    name: 'bookings',
    initialState: initialState,
    reducers: {
        getAllBookings: (state, action) => {
            state.bookings = action.payload
            return state
        },
        getAllBookingsBuyer: (state, action) => {
            state.bookingsBuyer = action.payload
            return state
        },
        getAllBookingsSeller: (state, action) => {
            state.bookingsSeller = action.payload
            return state
        }
    },
})

export const { getAllBookings, getAllBookingsBuyer, getAllBookingsSeller } = BookingSlice.actions

export default BookingSlice.reducer

export const createBooking = (payload) => {
    return async dispatch => {
        const createBookingResponse = await axios.post(`${BASE_URL}/book-tour`, payload)
    }
}

export const deleteBooking = (bid) => {
    return async dispatch => {
        const deleteBooking = await axios.delete(`${BASE_URL}/${bid}`)
    }
}

export const findAllBookings = ({ jwt }) => {
    return async dispatch => {
        const findBookings = await axios.get(`${BASE_URL}/find-all`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        const bookings = findBookings.data
        dispatch(getAllBookings(bookings))
    }
}

export const findAllBookingsBuyer = ({ bid, jwt }) => {
    return async dispatch => {
        const findBookingsBuyer = await axios.get(`${BASE_URL}/find-all-buyer/${bid}`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        const bookings = findBookingsBuyer.data
        dispatch(getAllBookings(bookings))
    }
}

export const findAllBookingsSeller = ({ sid, jwt }) => {
    return async dispatch => {
        const findBookingsSeller = await axios.get(`${BASE_URL}/find-all-seller/${sid}`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        const bookings = findBookingsSeller.data
        dispatch(getAllBookings(bookings))
    }
}

export const acceptBooking = ({ jwt, id, sid }) => {
    return async dispatch => {
        try {
            await axios.put(`${BASE_URL}/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            dispatch(findAllBookingsSeller({ sid, jwt }))
        }
        catch (e) {
            console.error({ error: e })
        }
    }
}