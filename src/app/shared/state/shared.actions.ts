import { createAction, props } from "@ngrx/store";

export const SET_LOADING_ACTION = '[shared state] set loading';
export const SET_ERROR_MESSAGE = '[shared state] set error message';

export const setLoadingSnipper = createAction(
    SET_LOADING_ACTION,
    props<{ status: boolean }>()
)
export const setErorMessage = createAction(
    SET_ERROR_MESSAGE,
    props<{message: string}>()
)