import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
     )
  ]
})
export class LoginRoutingModule { }
