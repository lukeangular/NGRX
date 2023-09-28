import { createAction, props } from "@ngrx/store";
import { Post } from "../models/posts.moddel";

export const ADD_POST_ACTION = '[Post page] add posts';
export const UPDATE_POST_ACTION = '[Post page] update post';
export const DELETE_POST_ACTION = '[Post page] delete post';
// load posts
export const LOAD_POSTS_ACTION = '[Post page] load posts';
export const LOAD_POSTTS_SUCCESS_ACTION = '[Post page] load posts success';
export const loadPosts = createAction(
    LOAD_POSTS_ACTION, 
)
export const loadPostsSuccess = createAction(
    LOAD_POSTTS_SUCCESS_ACTION,
    props<{posts: Post[]}>()
)

export const addpost = createAction(
    ADD_POST_ACTION, 
    props<{post : Post}>()
)
export const updatepost = createAction(
    UPDATE_POST_ACTION, 
    props<{post : Post}>()
)
export const deletepost = createAction(
    DELETE_POST_ACTION, 
    props<{id : string}>()
)

