import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";

const getPostsSate  = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsSate, (state)=>{
    return state.posts
})