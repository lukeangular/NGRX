import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./state/auth.selector";
import { AuthReducer } from "./state/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth.effects";
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ]
    }
]
@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffects]),
        RouterModule.forChild(routes)
    ],
})
export class AuthModule { }