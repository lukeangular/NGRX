import { createAction, props } from "@ngrx/store";

export const SET_LOADING_ACTION = '[shared state] set loading';

export const setLoadingSnipper = createAction(
    SET_LOADING_ACTION,
    props<{ status: boolean }>()
)
