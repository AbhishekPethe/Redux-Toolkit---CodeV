const configureStore = require("@reduxjs/toolkit").configureStore
// const cakeReducer = require("../features/cake/cakeSlice")
const cakeSlice = require("../features/cake/cakeSlice")

const store = configureStore({
    reducer: {
        cake: cakeSlice.reducer
    }
})

module.exports = {
    store,
    cakeSlice
}