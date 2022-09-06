import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
    name: 'city',

    initialState: {
        cities: []
    },

    reducers: {
        fetchFromServer: (state) => {
            state.cities = [{ _id: 1, url: "/New_York1.jpg", title: "New York", description: "City description" }]
        }
    }
})

export const { fetchFromServer } = citySlice.actions

export default citySlice.reducer