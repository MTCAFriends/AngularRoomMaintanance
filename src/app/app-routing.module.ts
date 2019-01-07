import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ForgotpwdComponent} from './forgotpwd.component/forgotpwd.component';
import {RegistrationComponent} from './registration.component/registration.component';
import { LoginComponent } from './login.component/login.component';
import { ProformaComponent } from './proforma.component/proforma.component';
import { RepostsComponent } from './reposts.component/reposts.component';
import { HomeComponent } from './home.component/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';



const routes: Routes = [
  {path:"login", component:LoginComponent},
  // {path:"", component:LoginComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"forgotpwd", component:ForgotpwdComponent},
  {path:"home", component:HomeComponent,
   children:[
              {path:"", redirectTo:'proforma', pathMatch:'full'},
              {path:"proforma", component:ProformaComponent,outlet:'child1'},
              {path:"reports", component:RepostsComponent,outlet:'child2'},
            ]
  },
  {path:"", redirectTo:'login', pathMatch:'full'},
  {path:"**", component:NotfoundpageComponent},
  //  {path:"proforma", component:ProformaComponent},
  //  {path:"reports", component:RepostsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
