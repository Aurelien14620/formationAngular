import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import {CoderbaseUiModule} from '@coderbase/ui';



@NgModule({
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule
  ]
})
export class UiModule { }
