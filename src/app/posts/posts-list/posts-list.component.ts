import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/state/app.state';
import { Post } from '../models/posts.moddel';
import { Observable } from 'rxjs'
import { getPosts } from '../state/posts.selector';
import { deletepost } from '../state/posts.action';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: Observable<Post[]>
  constructor(
    private _store: Store<AppSate>
  ) { }

  ngOnInit(): void {
    this.posts = this._store.select(getPosts)
  }

  deletePost(id: any) {
    if (confirm('Are you sure you want to delete this post')) {
      this._store.dispatch(deletepost({ id }))
    }
  }
}
