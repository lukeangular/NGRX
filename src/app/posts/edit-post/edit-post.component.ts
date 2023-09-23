import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/state/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from '../models/posts.moddel';
import { Subscription } from 'rxjs';
import { updatepost } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  post: Post;
  postSubscription: Subscription

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _store: Store<AppSate>
  ) { }


  ngOnInit(): void {
    this.postSubscription = this._activatedRoute.params.subscribe((params) => {
      const id = params['id']
      this._store.select(getPostById, ({ id })).subscribe((res) => {
        this.post = res
        this.formBuilder();
      })
    })
  }

  formBuilder(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
      ]),
    });
  }


  onSubmit() {
    if (this.postForm.invalid) {
      return
    }
    const post: Post = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this._store.dispatch(updatepost({ post }))
    this._router.navigate(['/posts'])
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
