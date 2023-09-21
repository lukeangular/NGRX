import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../satate/counter.state';
import { customIncrement } from '../satate/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {

  constructor(
    private _store: Store<{counter: CounterState}>
  ){}

  value: number;

  addValue(){
    console.warn(this.value)
    this._store.dispatch(customIncrement({value: +this.value}))
  }

}
