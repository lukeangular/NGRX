import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostService } from "src/app/services/post.service";
import { addPostSuccess, addpost, deletePostSuccess, deletepost, loadPosts, loadPostsSuccess, updatePostSuccess, updatepost } from "./posts.action";
import { mergeMap, map, of } from "rxjs";

@Injectable()
export class PostsEffect {
    constructor(
        private actions$: Actions,
        private _postService: PostService
    ) { }

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPosts),
            mergeMap((action) => {
                return this._postService.getPosts().pipe(
                    map((posts) => {
                        console.log("DATA is ", posts)
                        return loadPostsSuccess({ posts })
                    }))
            })
        )
    })

    //add post
    addPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addpost),
            mergeMap((action) => {
                return this._postService.addPost(action.post).
                    pipe(map((data) => {
                        const post = { ...action.post, id: data.name }
                        return addPostSuccess({ post })
                    })
                    )
            })
        )
    })

    // update post
    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatepost),
            mergeMap((action) => {
                return this._postService.updatePost(action.post).
                    pipe(map((data) => {
                        return updatePostSuccess({ post: action.post })
                    })
                    )
            })
        )
    })

    // delete post
    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletepost),
            mergeMap((action) => {
                return this._postService.deletepost(action.id).
                    pipe(map((data) => {
                        return deletePostSuccess({ id: action.id })
                    })
                    )
            })
        )
    })
}