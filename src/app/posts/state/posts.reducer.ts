import { createReducer, on } from "@ngrx/store";
import { initalState } from "./posts.state";
import { addpost, updatepost } from "./posts.action";

export const _postsReducer = createReducer(
    initalState,
    on(addpost, (state, action) => {
        let post = { ...action.post }
        post.id = (state.posts.length + 1).toString()
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatepost, (state, action) => {
        const updatedPost = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatedPost
        }
    })
)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}


