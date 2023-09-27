import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthentication } from 'src/app/auth/state/auth.selector';
import { AppSate } from 'src/app/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAthenticated: Observable<boolean>;
  constructor(
    private _store: Store<AppSate>
  ) { }

  ngOnInit(): void {
    this.isAthenticated = this._store.select(isAuthentication)
  }
}
