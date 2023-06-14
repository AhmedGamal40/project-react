import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";

const store = configureStore({ // to create store
    reducer: {
        counter,
    }
}) 

export default store ;