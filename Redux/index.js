console.log("From index.js")


// ---action---

const ORDER_CAKE = "ORDER_CAKE"

// below is the actioncreator which returns the action
function order_cake() {
    return {
        type: ORDER_CAKE,
        quantity : 1
    }
}
 
const initialState = {
    numOfCakes : 10,
}

// ---reducer---
// (previousState , action) => newState

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_CAKE:
            return {
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}