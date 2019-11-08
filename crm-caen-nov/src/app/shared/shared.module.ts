import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionComponent } from './components/action/action.component';




@NgModule({
  declarations: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, ButtonComponent, ActionComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, TemplatesModule, ButtonComponent, ActionComponent]
})
export class SharedModule { }
