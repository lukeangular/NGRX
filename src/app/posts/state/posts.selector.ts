import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";

const getPostsSate  = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsSate, (state)=>{
    return state.posts
})


export const getPostById = createSelector(getPostsSate, (state:any, props:any)=>{
    return state.posts.find( (post:any) => post.id === props.id)
})