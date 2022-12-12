import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/message`

const initialState = {
    messages: []
}


export const MessageSlice = createSlice({
    name: 'messages',
    initialState: initialState,
    reducers: {
        getAllMessages: (state, action) => {
            state.messages = action.payload
            return state
        }
    }
})

export const { getAllMessages } = MessageSlice.actions

export default MessageSlice.reducer

export const createMessage = (payload) => {
    return async () => {
        await axios.post(`${BASE_URL}/send-message`, payload)
    }
}

export const deleteMessage = (mid) => {
    return async () => {
        await axios.delete(`${BASE_URL}/${mid}`)
    }
}

export const findAllMessages = ({ jwt }) => {
    //Get id from jwt token
    return async dispatch => {
        const findBookings = await axios.get(`${BASE_URL}/get-messages`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        const bookings = findBookings.data
        dispatch(getAllMessages(bookings))
    }
}
