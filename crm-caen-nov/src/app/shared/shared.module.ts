import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';




@NgModule({
  declarations: [TotalPipe, TableauLightComponent],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, TableauLightComponent]
})
export class SharedModule { }
