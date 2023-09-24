import { createReducer } from "@ngrx/store"
import { initialState } from "../state/auth.state"

export const _authReducer = createReducer(
    initialState,
)

export function AuthReducer(state:any, action:any){
    return _authReducer(state, action)
}