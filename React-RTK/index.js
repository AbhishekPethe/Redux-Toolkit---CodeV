import store from "./src/app/store.js";
import { ordered , restocked } from "../React-RTK/src/features/cake/cakeSlice.js";

const unsubscribe = store.unsubscribe(() => {
    console.log("Updated State" , store.getState());
})

store.dispatch(ordered())