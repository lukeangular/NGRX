import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostService } from "src/app/services/post.service";
import { loadPosts, loadPostsSuccess } from "./posts.action";
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
}