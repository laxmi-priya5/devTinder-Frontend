import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionReducer from './connectionSlice'
import connectionRequestReducer from './connectionRequestSlice'
const Store = configureStore({
    reducer:{
        user : userReducer,
        feed:feedReducer,
        connection:connectionReducer,
        connectionRequest : connectionRequestReducer
    }
})

export default Store;