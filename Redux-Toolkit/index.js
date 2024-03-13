const {store} = require("./app/store")
// const cakeActions = require("./features/cake/cakeSlice").cakeActions
const cakeSlice = require("./features/cake/cakeSlice")

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State" , store.getState());
})


// store.dispatch(cakeActions.ordered())
console.log(cakeSlice.actions.ordered());