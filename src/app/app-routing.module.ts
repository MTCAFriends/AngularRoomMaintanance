import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ForgotpwdComponent} from './forgotpwd.component/forgotpwd.component';
import {RegistrationComponent} from './registration.component/registration.component';
import { LoginComponent } from './login.component/login.component';
import { ProformaComponent } from './proforma.component/proforma.component';
import { RepostsComponent } from './reposts.component/reposts.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"forgotpwd", component:ForgotpwdComponent},
  {path:"proforma", component:ProformaComponent},
  {path:"reports", component:RepostsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
