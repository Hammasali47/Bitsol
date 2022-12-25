import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlices";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
    },
})