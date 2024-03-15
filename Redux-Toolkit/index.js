const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeActions
const icecreamActions = require("./features/icecream/iceCreamSlice").icecreamActions
const fetchUsers = require("./features/users/usersSlice").fetchUsers

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    // console.log("Updated State" , store.getState());
})


// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(10))


store.dispatch(fetchUsers())

unsubscribe()