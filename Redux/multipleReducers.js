const redux = require("redux")

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const ORDER_CAKE = "ORDER_CAKE"
const RESTOCK_CAKES = "RESTOCK_CAKES"
const ORDER_ICECREAM = "ORDER_ICECREAM"
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM"


// we can have separate initial State or only one , its upto us
const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCream : 20
}

const initialState = {
    numOfCakes: 10,
    numOfIceCream : 20
}


function orderCake() {
    return {
        type : ORDER_CAKE
    }
}

function restockCake(qty=1) {
    return {
        type: RESTOCK_CAKES,
        payload : qty
    }
}

function orderIceCream() {
    return {
        type: ORDER_ICECREAM
    }
}

function restockIceCream(qty=1) {
    return {
        type: RESTOCK_ICECREAM,
        payload : qty
    }
}



const cakeReducer = (state = initialState.numOfCakes , action) => {
    switch (action.type) {
        case ORDER_CAKE:
            return  state + 1
        case RESTOCK_CAKES:
            return state + action.payload
        default:
            return state
    }    
}

const IceCreamReducer = (state = initialState.numOfIceCream , action) => {
    switch ( action.type) {
        case ORDER_ICECREAM:
            return  state - 1
            
        case RESTOCK_ICECREAM:
            return  state + action.payload

        // the thing is when the action is dispatched , it reaches to both the reducers
        // its upto the reducer to execute it or ignore 
        // below we are ordering cake but still reducing the icecream quantity
        case ORDER_CAKE:
            return state - 1
        default:
            return state
    }
}


// const store = createStore({ reducer, reducer1 })


// combining reducers
// key and value
const rootReducer = combineReducers({
    cakes: cakeReducer,
    iceCream : IceCreamReducer
})

const store = createStore(rootReducer)


const unsubscribe = store.subscribe(() => {
    console.log("Updated State : " , store.getState());
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(restockCake(3))

store.dispatch(orderIceCream())
store.dispatch(restockIceCream(5))

unsubscribe()