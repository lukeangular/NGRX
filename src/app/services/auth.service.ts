import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { AuthResponseData } from "../model/AuthResponseData.model";
import { User } from "../model/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private _http: HttpClient
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
    getErrorMessage(message:string){
        switch(message){
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found'

            case 'INVALID_PASSWORD':
                return 'Invalid Password'

            default:
                return 'Unknown Error Occcur. Please try again'
        }
    }


}