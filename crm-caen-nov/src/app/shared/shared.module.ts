import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';




@NgModule({
  declarations: [TotalPipe, TableauLightComponent, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, TableauLightComponent, StateDirective]
})
export class SharedModule { }
