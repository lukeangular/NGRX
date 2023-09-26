import { createReducer, on } from "@ngrx/store"
import { initialState } from "./shared.state"
import { setErorMessage, setLoadingSnipper } from "./shared.actions"
import { ofType } from "@ngrx/effects"

const _sharedReducer = createReducer(
    initialState,
    on(setLoadingSnipper, (state, action) => {
        return {
            ...state,
            showLoading: action.status
        }
    }),
    on(setErorMessage, (state, action)=>{
        return{
            ...state,
            errorMessage: action.message
        }
    })
)

export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}