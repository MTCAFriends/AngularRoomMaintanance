import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    type="password";
    show=true;
    loginForm:FormGroup;

  constructor(private _router:Router) { }
  forgotPwd():void{
      this._router.navigate(['/forgotpwd']);
  }
  
    login(loginForm){
        console.log(loginForm.value);

    }

  ngOnInit() {
    this.loginForm=new FormGroup({
        email:new FormControl('',[Validators.required,Validators.email]),
        pswd:new FormControl('',[Validators.required]),
      });
  }
 
  toggleShow(){
        this.show = !this.show;
        if (this.show){
            this.type = "text";
        }
        else {
            this.type = "password";
        }
    }
}

