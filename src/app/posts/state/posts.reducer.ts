import { createReducer,on } from "@ngrx/store";
import { initalState } from "./posts.state";
import { addpost } from "./posts.action";

export const _postsReducer = createReducer(
    initalState,
    on(addpost, (state, action) => {
        let post = {...action.post}
        post.id = (state.posts.length + 1).toString()
        return {
            ...state,
            posts: [...state.posts, post]
        }
    })
)

export function postsReducer(state:any, action:any){
    return _postsReducer(state, action)
}


