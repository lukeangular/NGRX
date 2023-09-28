import { Post } from "../models/posts.moddel";

export interface PostState {
    posts: Post[];
}

export const initalState: PostState = {
    posts: []
}