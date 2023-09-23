import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { CouterOutputComponent } from "./couter-output/couter-output.component";
import { CouterButtonsComponent } from "./couter-buttons/couter-buttons.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    }
]
@NgModule({
    declarations: [
        CounterComponent,
        CouterOutputComponent,
        CouterButtonsComponent,
        CustomCounterInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
}
)
export class CounterModule { }