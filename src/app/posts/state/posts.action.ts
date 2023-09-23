import { createAction, props } from "@ngrx/store";
import { Post } from "../models/posts.moddel";

export const ADD_POST_ACTION = '[Post page] add posts';
export const UPDATE_POST_ACTION = '[Post page] update post';

export const addpost = createAction(
    ADD_POST_ACTION, 
    props<{post : Post}>()
)
export const updatepost = createAction(
    UPDATE_POST_ACTION, 
    props<{post : Post}>()
)