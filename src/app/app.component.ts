import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppSate } from './state/app.state';
import { getErrorMessage, getSharedLoading } from './shared/state/shared.selector';
import { autoLogin } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'counter';

  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;

  constructor(
    private _store: Store<AppSate>
  ){}

  ngOnInit(): void {
    this.showLoading = this._store.select(getSharedLoading)
    this.errorMessage = this._store.select(getErrorMessage)
    this._store.dispatch(autoLogin());
  }
}
