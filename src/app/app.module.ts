import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';

//import {NewmoduleModule} from './newmodule/newmodule.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component/login.component';
import { RegistrationComponent } from './registration.component/registration.component';
import { ForgotpwdComponent } from './forgotpwd.component/forgotpwd.component';
import { HomeComponent } from './home.component/home.component';
import { ProformaComponent } from './proforma.component/proforma.component';
import { RepostsComponent } from './reposts.component/reposts.component';
import { ViewComponent } from './view/view.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { RegistersUsersService } from './registers-users.service';
import { SampledirectiveDirective } from './sampledirective.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpwdComponent,
    HomeComponent,
    ProformaComponent,
    RepostsComponent,
    ViewComponent,
    NotfoundpageComponent,
    SampledirectiveDirective,
  ],
  imports: [
    //NewmoduleModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,RouterModule,
    HttpModule,
    ],

  providers: [RegistersUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
