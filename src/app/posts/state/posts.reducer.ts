import { createReducer } from "@ngrx/store";
import { initalState } from "./posts.state";

export const _postsReducer = createReducer(
    initalState
)

export function postsReducer(state:any, action:any){
    return _postsReducer(state, action)
}


