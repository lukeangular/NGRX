import { Post } from "../models/posts.moddel";

export interface PostState {
    posts: Post[];
}

export const initalState: PostState = {
    posts: [
        {
            'id': '1',
            'title': 'sample title 1',
            'description': 'sample descripotion 1'
        },
        {
            'id': '2',
            'title': 'sample title 2',
            'description': 'sample descripotion 2'
        }
    ]
}