import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppSate } from './state/app.state';
import { getSharedLoading } from './shared/state/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'counter';

  showLoading: Observable<boolean>

  constructor(
    private _store: Store<AppSate>
  ){}

  ngOnInit(): void {
    this.showLoading = this._store.select(getSharedLoading)
  }
}
