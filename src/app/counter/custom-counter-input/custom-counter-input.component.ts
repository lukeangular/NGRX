import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../satate/counter.state';
import { changeName, customIncrement } from '../satate/counter.actions';
import { getNameSelector } from '../satate/counter.selector';
import { AppSate } from 'src/app/state/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  name: string;
  constructor(
    private _store: Store<AppSate>
  ){}

  ngOnInit(): void {
    this._store.select(getNameSelector).subscribe((res)=>{
      console.log("name console")
      this.name = res
    })
  }


  value: number;

  addValue(){
    console.warn(this.value)
    this._store.dispatch(customIncrement({value: +this.value}))
  }

  updateName(){
    this._store.dispatch(changeName());
  }

}
