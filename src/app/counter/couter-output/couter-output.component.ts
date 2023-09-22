import { Component, Input,OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getCounterSelector } from '../satate/counter.selector';
import { AppSate } from 'src/app/state/app.state';

@Component({
  selector: 'app-couter-output',
  templateUrl: './couter-output.component.html',
  styleUrls: ['./couter-output.component.scss']
})
export class CouterOutputComponent implements OnInit, OnDestroy  {
  counter: number=0;
  counterSubscription: Subscription;
  constructor(
    private _store: Store<AppSate>
  ){}

  ngOnInit(){
    // counter here is from above counter object
    this.counterSubscription = this._store.select(getCounterSelector).subscribe((data)=>{
      console.log("counter console...")
      this.counter = data
    })
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }

}
