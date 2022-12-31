import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "../features/Lists/ListSlice";

export const store = configureStore({
    reducer:{
        list:ListReducer
    },
})
