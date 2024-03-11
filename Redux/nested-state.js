const redux = require("redux")
const produce = require("immer").produce


const createStore = redux.createStore

const initialState = {
    name : "abc",
    address: {
        street: "123 Avenue , Middlesbourgh",
        apt: 231,
        city: "nyc",
        state : "NY"
    }
}

const CHANGE_NAME = "CHANGE_NAME"
const CHANGE_APT = "CHANGE_APT"


function change_name(name) {
    return {
        type: CHANGE_NAME,
        payload : name
    }
}

function change_apt(apt) {
    return {
        type: CHANGE_APT,
        payload : apt
    }
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name : action.payload
            }
        case CHANGE_APT:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         apt : action.payload
            //     }
                
            // }
            // below with immer , same as above
            return produce(state, (draft) => {
                    draft.address.apt = action.payload
                })
            
        default:
            return state
    }
}

const store = createStore(reducer)

console.log("Initial State : " , store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State : " , store.getState());
})


store.dispatch(change_name("efg"))
store.dispatch(change_apt(111))

unsubscribe()