import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CouterOutputComponent } from './counter/couter-output/couter-output.component';
import { CouterButtonsComponent } from './counter/couter-buttons/couter-buttons.component';
import {StoreModule} from '@ngrx/store'
import { counterReducer } from './counter/satate/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CouterOutputComponent,
    CouterButtonsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
