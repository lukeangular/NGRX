import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user.model";

export const LOGIN_START = '[login page] login starts';
export const LOGIN_SUCCESS = '[login page] login success';
export const LOGIN_FAIL = '[login page] login fail';

export const loginStart = createAction(
    LOGIN_START,
    props<{ email: string; password: string }>()
)
export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{user: User}>()
)
export const loginFail = createAction(
    LOGIN_FAIL
)