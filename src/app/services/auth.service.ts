import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private _http: HttpClient
    ) { }


    login(email: string, password: string) {
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`
        return this._http.post(url,{email, password, returnSecureToken:true})
    }
}