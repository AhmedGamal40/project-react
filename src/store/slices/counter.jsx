import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    counter_value : 0 
}

const counter = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers:{
        incrementCounter: (state , action) => {
            state.counter_value = ++state.counter_value
        },
        decrementCounter: (state , action) => {
            state.counter_value = --state.counter_value
        },
        incrementValue: (state , action) => { // علشان لو عاوز ادخله قيمه معينه
            state.counter_value = +state.counter_value + action.payload
            // payload = new value
        }
    }

})

 // fire component
export const { incrementCounter , decrementCounter , incrementValue } = counter.actions // علشان اقدر استخدم ال functions  (actions ) 

 // used in store
export default counter.reducer; // علشان ال store