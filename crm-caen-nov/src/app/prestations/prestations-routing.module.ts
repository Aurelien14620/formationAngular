import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationsComponent } from './pages/page-add-prestations/page-add-prestations.component';
import { PageEditPrestationsComponent } from './pages/page-edit-prestations/page-edit-prestations.component';

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
  },
  {
    path: 'edit/:id',
    component: PageEditPrestationsComponent,
    data: { title: 'Prestations', label: 'Editer une prestation'}
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
