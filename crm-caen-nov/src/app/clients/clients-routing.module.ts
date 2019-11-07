import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';

const appRoutes: Routes = [
  { path: '', component: PageClientsComponent },
  { path: 'add', component: PageAddClientsComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
     )
  ]
})
export class ClientsRoutingModule { }
