import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs";
import { Store } from "@ngrx/store";
import { AppSate } from "src/app/state/app.state";
import { setLoadingSnipper } from "src/app/shared/state/shared.actions";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private _authService: AuthService,
        private _store: Store<AppSate>
    ) { }
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                this._store.dispatch(setLoadingSnipper({status:true}))
                return this._authService.
                    login(action.email, action.password).
                    pipe(map((data) => {
                        const user = this._authService.formatUser(data)
                        this._store.dispatch(setLoadingSnipper({status:false}))
                        return loginSuccess({ user });
                    }))
            })
        )
    })
}