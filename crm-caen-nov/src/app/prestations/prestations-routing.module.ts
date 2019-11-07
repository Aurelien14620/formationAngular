import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationsComponent } from './pages/page-add-prestations/page-add-prestations.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', label: 'Toutes les prestations' }
  },
  {
    path: 'add',
    component: PageAddPrestationsComponent,
    data: { title: 'Prestations', label: 'Ajouter une prestation'}
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
