import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../satate/counter.actions';
import { CounterState } from '../satate/counter.state';

@Component({
  selector: 'app-couter-buttons',
  templateUrl: './couter-buttons.component.html',
  styleUrls: ['./couter-buttons.component.scss']
})
export class CouterButtonsComponent {

  constructor(
    // state structure trying to implemen here
    private _store: Store<{ counter: CounterState }>
  ) {}

  onIncrement(): void {
    // dispatch action when click on increment
    this._store.dispatch(increment());
    console.log("dispatch incrmenet")
  }

  onDecrement(): void {
    // dispatch action when click on decrement
    this._store.dispatch(decrement());
  }

  onReset(): void {
    // dispatch action when click on reset
    this._store.dispatch(reset());
  }
}
