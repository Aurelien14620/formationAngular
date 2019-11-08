import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationsComponent } from './pages/page-add-prestations/page-add-prestations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PageEditPrestationsComponent } from './pages/page-edit-prestations/page-edit-prestations.component';



@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationsComponent, FormPrestationComponent, PageEditPrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
