import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import citySlice from './citySlice'
import citiesAPI from './citiesAPI'
import itineraiesAPI from './itinerariesAPI'
import activitiesAPI from './activitiesAPI'
import commentsAPI from './commentsAPI'
import usersAPI from './usersAPI'

export default configureStore({
    reducer: {
        cities: citySlice,
        auth: authReducer,
        [citiesAPI.reducerPath]: citiesAPI.reducer,
        [itineraiesAPI.reducerPath]: itineraiesAPI.reducer,
        [activitiesAPI.reducerPath]: activitiesAPI.reducer,
        [usersAPI.reducerPath]: usersAPI.reducer,
        [commentsAPI.reducerPath]: commentsAPI.reducer

    },
    middleware: (getAllCities) => getAllCities({
        immutableCheck: false,
        serializableCheck: false
    })
})