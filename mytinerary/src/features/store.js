import { configureStore } from '@reduxjs/toolkit'
import citySlice from './citySlice'
import citiesApi from './citiesAPI'

export default configureStore({
    reducer: {
        cities: citySlice,
        [citiesApi.reducerPath]: citiesApi.reducer
    },
})