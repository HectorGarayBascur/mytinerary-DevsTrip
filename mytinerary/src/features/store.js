import { configureStore } from '@reduxjs/toolkit'
import citySlice from './citySlice'
import citiesAPI from './citiesAPI'
import itineraiesAPI from './itinerariesAPI'
import activitiesAPI from './activitiesAPI'
import commentsAPI from './commentsAp'

export default configureStore({
    reducer: {
        cities: citySlice,
        [citiesAPI.reducerPath]: citiesAPI.reducer,
        [itineraiesAPI.reducerPath]: itineraiesAPI.reducer,
        [activitiesAPI.reducerPath]: activitiesAPI.reducer,
        [commentsAPI.reducerPath]: commentsAPI.reducer
    },
})