import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from "../features/icecream/icecreamSlice"
import usersReducer from "../features/users/usersSlice"

export const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        users : usersReducer
    }
})

