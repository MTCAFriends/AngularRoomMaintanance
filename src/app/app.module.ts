import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component/login.component';
import { RegistrationComponent } from './registration.component/registration.component';
import { ForgotpwdComponent } from './forgotpwd.component/forgotpwd.component';
import { ProformaComponent } from './proforma.component/proforma.component';
import { RepostsComponent } from './reposts.component/reposts.component';
import { fromEventPattern } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpwdComponent,
    ProformaComponent,
    RepostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,RouterModule,
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
