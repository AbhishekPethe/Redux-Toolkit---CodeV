const redux = require("redux")
const createStore = redux.createStore
// createStore is depreaciated but we are still using it , we will use configureStore after some time


// bindActionCreators is another way of binding the reducer with dispatch
const bindActionCreators = redux.bindActionCreators

// ---action---

const ORDER_CAKE = "ORDER_CAKE"
const RESTOCK_CAKES = "RESTORE_CAKES"

const initialState = {
    numOfCakes : 10,
}

// below is the action creator which returns the action
function order_cake() {
    return {
        type: ORDER_CAKE
    }
}

function restock_cakes(qty = 1) {
    return {
        type: RESTOCK_CAKES,
        quantity : qty
    }
}


// ---reducer---
// (previousState , action) => newState

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case RESTOCK_CAKES:
            return {
                ...state,
                numOfCakes :  state.numOfCakes +  action.quantity
            }
        default:
            return state
    }
}

const store = createStore(reducer)

console.log("Initial State : ", store.getState());

//subscribe method will listen to any changes in the state 
// unsubscribe is used to stop the listening of changes


const unsubscribe = store.subscribe(() => {
    console.log("updated state : ", store.getState() );
})

// store.dispatch(order_cake())
// store.dispatch(order_cake())
// store.dispatch(order_cake())
// store.dispatch(restock_cakes(4))


// below ex using bindActionCreators
const actions = bindActionCreators({order_cake , restock_cakes } , store.dispatch)
actions.order_cake()
actions.order_cake()
actions.restock_cakes(5)

unsubscribe()

// the below statement wont have any effect cuz we have already unsubscribed from the store 
store.dispatch(order_cake())