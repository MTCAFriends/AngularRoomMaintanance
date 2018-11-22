import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    type="password";
    show=true;

  constructor(private _router:Router) { }
  forgotPwd():void{
      this._router.navigate(['/forgotpwd']);
  }
    

  ngOnInit() {
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

