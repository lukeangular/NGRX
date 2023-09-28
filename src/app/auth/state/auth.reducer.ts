import { createReducer, on } from "@ngrx/store"
import { initialState } from "../state/auth.state"
import { autoLogout, loginSuccess, signupSuccess } from "./auth.actions"

export const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(signupSuccess, (state, action)=>{
        return {
            ...state,
            user: action.user
        }
    }),
    on(autoLogout, (state, action)=>{
        return {
            ...state,
            user: null
        }
    })
)

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}