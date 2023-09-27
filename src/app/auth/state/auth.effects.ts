import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { autoLogin, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap, EMPTY } from "rxjs";
import { Store, createAction } from "@ngrx/store";
import { AppSate } from "src/app/state/app.state";
import { setErorMessage, setLoadingSnipper } from "src/app/shared/state/shared.actions";
import { Router } from "@angular/router";
import { User } from "src/app/model/user.model";

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
                        this._store.dispatch(setLoadingSnipper({ status: false }))
                        this._store.dispatch(setErorMessage({ message: '' }))
                        const user = this._authService.formatUser(data)
                        this._authService.setUserInLocalStorage(user);
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
                        this._authService.setUserInLocalStorage(user);
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

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(autoLogin),
            mergeMap((action) => {
                const user = this._authService.getUserFromLocalStorage();
                if (user !== null) {
                    return of(loginSuccess({ user }));
                } else {
                    return EMPTY;
                }
            })
        );
    });
}