const { cakeActions } = require("../cake/cakeSlice")

const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numOfIceCream : 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered : (state) => {
            state.numOfIceCream--
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: (builder) =>  {
        // we can also write 'cake/ordered' instead of cakeActions.ordered
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numOfIceCream-- 
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions