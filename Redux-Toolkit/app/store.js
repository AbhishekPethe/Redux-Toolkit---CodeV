const configureStore = require("@reduxjs/toolkit").configureStore
const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/iceCreamSlice")
const usersReducer = require("../features/users/usersSlice")

const reduxLogger = require("redux-logger")

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        users : usersReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store


// there is already a default middleware list provided by rtk , so what we are doing here is adding our middleware to that list by using concat method