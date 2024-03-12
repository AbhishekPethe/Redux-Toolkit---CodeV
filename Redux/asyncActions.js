const redux = require("redux")
const createStore = redux.createStore
const thunk = require('redux-thunk').thunk
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error :  "",
}


const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequested = () => {
    return {
        type : FETCH_USERS_REQUESTED
    }
}

const fetchUsersSucceeded = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload : users
    }

}

const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload : error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
                
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                users: action.payload,
                loading: false,
                error : " "
            }
        case FETCH_USERS_FAILED:
            return {
                ...state, 
                users: [],
                loading: false,
                error : action.payload
            }
        default:
            return state
    }
}

// thunk allows us to return a function instead of an action , this way we can also perform side effects such as async tasks
// this function can also dispatch the actions
const fetchUsers = () => {
    return async function(dispatch) {
        try {
            dispatch(fetchUsersRequested())
            const res = await fetch("https://jsonplaceholder.typicode.com/userss")
            const data = await res.json()
            const users = data.map((each)=> each.name)
            dispatch(fetchUsersSucceeded(users))
        }
        catch (error) {
            dispatch(fetchUsersFailed(error.message))
        }
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

const unsubscribe = store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchUsers())