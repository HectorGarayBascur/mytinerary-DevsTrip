import { configureStore } from '@reduxjs/toolkit'
import citySlice from './citySlice'
import citiesApi from './citiesAPI'
import itineraiesAPI from './itinerariesAPI'
import activitiesAPI from './activitiesAPI'

export default configureStore({
    reducer: {
        cities: citySlice,
        [citiesApi.reducerPath]: citiesApi.reducer,
        [itineraiesAPI.reducerPath]: itineraiesAPI.reducer,
        [activitiesAPI.reducerPath]: activitiesAPI.reducer
    },
})