const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

// MiddleWare
// provides a third-party extension point bw dispatching the action and the moment it reaches the reducer
const applyMiddleware = redux.applyMiddleware

// logger 
// we are using logger as a middleware here
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()


const ORDER_CAKE = "ORDER_CAKE"
const RESTOCK_CAKES = "RESTOCK_CAKES"
const ORDER_ICECREAM = "ORDER_ICECREAM"
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM"
 

const initialCakeState = {
    numOfCakes : 10
}

const initialIceCreamState = {
    numOfIceCreams : 15
}

const order_cake = () => {
    return {
        type : ORDER_CAKE
    }
}

const restock_cakes = (qty = 1) => {
    return {
        type: RESTOCK_CAKES,
        payload : qty
    }
}  

const order_icecream = () => {
    return {
        type: ORDER_ICECREAM,
    }
}

const restock_icecream = (qty = 1) => {
    return {
        type: RESTOCK_ICECREAM,
        payload : qty
    }
}


const cakeReducer = (state = initialCakeState , action) => {
    switch (action.type) {
        case ORDER_CAKE:
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
        case RESTOCK_CAKES:
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState , action) => {
    switch (action.type) {
        case ORDER_ICECREAM:
            return {
                ...state,
                numOfIceCreams : state.numOfIceCreams - 1
            }
        case RESTOCK_ICECREAM:
            return {
                ...state,
                numOfIceCreams : state.numOfIceCreams + action.payload
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer , applyMiddleware(logger))

const unsubscribe = store.subscribe(() => {
    // console.log("Updates State : " , store.getState());
})

const actions = bindActionCreators({ order_cake, restock_cakes, order_icecream, restock_icecream }, store.dispatch)

actions.order_cake()
actions.restock_icecream(10)

// store.dispatch(order_cake())
// store.dispatch(order_cake())
// store.dispatch(order_cake())
// store.dispatch(order_cake())
// store.dispatch(order_cake())


// store.dispatch(order_icecream())
// store.dispatch(order_icecream())
// store.dispatch(order_icecream())


// store.dispatch(restock_cakes(10))



unsubscribe()