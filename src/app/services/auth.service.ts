import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { AuthResponseData } from "../model/AuthResponseData.model";
import { User } from "../model/user.model";
import { Store } from "@ngrx/store";
import { AppSate } from "../state/app.state";
import { autoLogout } from "../auth/state/auth.actions";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private _http: HttpClient,
        private _store: Store<AppSate>
    ) { }


    login(email: string, password: string): Observable<AuthResponseData> {
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`
        return this._http.post<AuthResponseData>(url, { email, password, returnSecureToken: true })
    }

    // format data function
    formatUser(data: AuthResponseData) {
        const expirationdate = new Date(new Date().getTime() + +data.expiresIn * 1000)
        const user = new User(data.email, data.idToken, data.localId, expirationdate);
        return user
    }


    //get error message
    getErrorMessage(message: string) {
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found'

            case 'INVALID_PASSWORD':
                return 'Invalid Password'

            case 'EMAIL_EXISTS':
                return 'Email Already exists'

            default:
                return 'Unknown Error Occcur. Please try again'
        }
    }


    // sign up
    signUp(email: string, password: string): Observable<AuthResponseData> {
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`
        return this._http.post<AuthResponseData>(url, { email, password, returnSecureToken: true })
    }


    // set user in local storage
    timeOutInterval: any;
    setUserInLocalStorage(user: User) {
        localStorage.setItem('userData', JSON.stringify(user))
        this.runTimeoutInterval(user)
    }


    // get user from local storage
    getUserFromLocalStorage() {
        const userStringData = localStorage.getItem('userData')
        if (userStringData) {
            const userData = JSON.parse(userStringData);
            const expirationDate = new Date(userData.expirationdate)
            const user = new User(userData.email, userData.token, userData.localId, expirationDate)
            this.runTimeoutInterval(user)
            return user
        }
        return null
    }


    runTimeoutInterval(user: User) {
        const todaysDate = new Date().getTime();
        const expirationDate = user.getExpireDate.getTime();
        const timeInterval = expirationDate - todaysDate;

        this.timeOutInterval = setTimeout(() => {
            //logout functionality or get the refresh token
            this._store.dispatch(autoLogout());
        }, timeInterval);
    }


    logout() {
        localStorage.removeItem('userData')
        if(this.timeOutInterval){
            clearTimeout(this.timeOutInterval);
            this.timeOutInterval = null
        }
    }

}