import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    numOfCakes : 10
}

export const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            if (action.payload) {
                
                state.numOfCakes += action.payload
            }
            else {
                state.numOfCakes += 1
            }
        }
    }
})

export default cakeSlice.reducer
export const {ordered , restocked } = cakeSlice.actions