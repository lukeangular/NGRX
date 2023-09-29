import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, exhaustMap } from 'rxjs';
import { AppSate } from '../state/app.state';
import { Store } from '@ngrx/store';
import { getToken } from '../auth/state/auth.selector';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(
    private _store: Store<AppSate>
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this._store.select(getToken).pipe(
      exhaustMap((token) => {
        if (!token) {
          return next.handle(request);
        }
        let modifiedReq = request.clone({
          params: request.params.append('auth', token)
        })
        return next.handle(modifiedReq)
      }))

  }
}
