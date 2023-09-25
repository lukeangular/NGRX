import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private _authService: AuthService
    ) { }
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this._authService.
                    login(action.email, action.password).
                    pipe(map((data) => {
                        const user = this._authService.formatUser(data)
                        return loginSuccess({ user });
                    }))
            })
        )
    })
}