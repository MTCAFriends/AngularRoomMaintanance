import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  forgotForm:FormGroup;
  constructor() { 

  }
  changePassword(forgotForm){
    console.log(forgotForm.value);
  }

  ngOnInit() {
    this.forgotForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      opwd:new FormControl('',[Validators.required]),
      npwd:new FormControl('',[Validators.required]),
    });

  }

}
