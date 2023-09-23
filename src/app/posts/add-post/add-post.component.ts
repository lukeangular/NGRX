import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppSate } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { addpost } from '../state/posts.action';
import { Post } from '../models/posts.moddel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  postForm: FormGroup;

  constructor(
    private _store: Store<AppSate>,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
    });
  }


  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    // we are passing parameter as object in acton so here post is also passing as an object
    this._store.dispatch(addpost({ post }))
    this._router.navigate(['/posts'])
  }
}
