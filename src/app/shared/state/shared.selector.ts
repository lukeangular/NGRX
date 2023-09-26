import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppSate } from "src/app/state/app.state";
import { SharedState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getSharedLoading = createSelector(getSharedState, (state) => {
    return state.showLoading;
})