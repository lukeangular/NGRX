import { createReducer, on } from "@ngrx/store";
import { initalState } from "./posts.state";
import { addPostSuccess, addpost, deletePostSuccess, deletepost, loadPostsSuccess, updatePostSuccess, updatepost } from "./posts.action";

export const _postsReducer = createReducer(
    initalState,
    on(addPostSuccess, (state, action) => {
        let post = { ...action.post }
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePostSuccess, (state, action) => {
        const updatedPost = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatedPost
        }
    }),
    on(deletePostSuccess, (state, { id }) => {
        let deletedPost = state.posts.filter((post) => {
            return post.id !== id
        })
        return {
            ...state,
            posts: deletedPost
        }
    }),
    on(loadPostsSuccess, (state, action)=>{
        return {
            ...state,
            posts: action.posts
        }
    })
)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}


