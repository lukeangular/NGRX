import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";
import { EffectsModule } from "@ngrx/effects";
import { PostsEffect } from "./state/posts.effects";
import { POSTS_STATE_NAME } from "./state/posts.selector";

const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
            {
                path: 'add',
                component: AddPostComponent
            },
            {
                path: 'edit/:id',
                component: EditPostComponent
            }
        ]
    }
]

@NgModule({
    declarations:[
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
        EffectsModule.forFeature([PostsEffect])
    ]
})
export class PostsModule{}