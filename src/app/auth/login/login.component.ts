import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppSate } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private _store: Store<AppSate>
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this._store.dispatch(loginStart({email,password}))

    console.log(email, password)
  }
}
