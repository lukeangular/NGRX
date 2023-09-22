import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

// ('counter should match with storeModule counter')
const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounterSelector = createSelector(getCounterState, (state) => {
    return state.counter
});

export const getNameSelector = createSelector(getCounterState, (state)=>{
    return state.name
});