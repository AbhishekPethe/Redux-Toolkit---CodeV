const initialState = {
    numOfCakes : 10
}

const redux = require("redux")
// const createStore = redux.createStore

const ORDER_CAKE = "ORDER_CAKE"
const RESTOCK_CAKES = "RESTOCK_CAKES"

function orderCake() {
    return {
        type: ORDER_CAKE
    }
}

function restockCake(qty = 1) {
    return {
        type: RESTOCK_CAKES,
        quantity : qty
    }
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case ORDER_CAKE:
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
        case RESTOCK_CAKES:
            return {
                ...state, 
                numOfCakes : state.numOfCakes + action.quantity
            }
        default:
            return state
    }
}

// const store = createStore(reducer)
const store = redux.createStore(reducer)

const unsubscribe = store.subscribe(() => {
    console.log("Updated State " , store.getState());
})

console.log("Initial State " , store.getState());

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(restockCake(5))


unsubscribe()