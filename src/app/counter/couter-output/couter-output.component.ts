import { Component, Input,OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import { CounterState } from '../satate/counter.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-couter-output',
  templateUrl: './couter-output.component.html',
  styleUrls: ['./couter-output.component.scss']
})
export class CouterOutputComponent implements OnInit, OnDestroy  {
  counter: number=0;
  counterSubscription: Subscription;
  constructor(
    private _store: Store<{counter: CounterState}>
  ){}

  ngOnInit(){
    // counter here is from above counter object
    this.counterSubscription = this._store.select('counter').subscribe((data)=>{
      this.counter = data.counter
    })
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }

}
