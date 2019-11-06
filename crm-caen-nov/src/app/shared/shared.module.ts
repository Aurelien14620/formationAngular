import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TemplatesModule } from '../templates/templates.module';




@NgModule({
  declarations: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, TemplatesModule]
})
export class SharedModule { }
