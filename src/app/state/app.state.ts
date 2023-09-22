import { counterReducer } from "../counter/satate/counter.reducer";
import { CounterState } from "../counter/satate/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostState } from "../posts/state/posts.state";

export interface AppSate{
    posts:PostState,
    counter:CounterState
}


export const AppReducer = {
    counter: counterReducer,
    posts: postsReducer
}