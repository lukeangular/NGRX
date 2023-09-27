import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { AppSate } from "src/app/state/app.state";
import { setErorMessage, setLoadingSnipper } from "src/app/shared/state/shared.actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private _authService: AuthService,
        private _store: Store<AppSate>,
        private _router: Router
    ) { }
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                this._store.dispatch(setLoadingSnipper({ status: true }))
                return this._authService.
                    login(action.email, action.password).
                    pipe(map((data) => {
                        const user = this._authService.formatUser(data)
                        this._store.dispatch(setLoadingSnipper({ status: false }))
                        this._store.dispatch(setErorMessage({ message: '' }))
                        return loginSuccess({ user });
                    }),
                        catchError((errorResp) => {
                            this._store.dispatch(setLoadingSnipper({ status: false }))
                            const errorMesssage = this._authService.getErrorMessage(
                                errorResp.error.error.message)
                            return of(setErorMessage({ message: errorMesssage }))
                        })
                    )
            })
        )
    })


    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(...[loginSuccess, signupSuccess]),
            tap((action) => {
                this._router.navigate(['/'])
            })
        )
    }, { dispatch: false })



    $signup = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap((action) => {
                return this._authService.signUp(action.email, action.password).
                    pipe(map((data) => {
                        this._store.dispatch(setLoadingSnipper({ status: false }))
                        this._store.dispatch(setErorMessage({ message: '' }))
                        const user = this._authService.formatUser(data)
                        return signupSuccess({ user: user })
                    }),
                        catchError((errorResp) => {
                            this._store.dispatch(setLoadingSnipper({ status: false }))
                            const errorMesssage = this._authService.getErrorMessage(
                                errorResp.error.error.message)
                            return of(setErorMessage({ message: errorMesssage }))
                        })
                    )
            })
        )
    })
}