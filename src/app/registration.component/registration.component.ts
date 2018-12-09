  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm:FormGroup;
  constructor() { 
    
  }
   addUser(regForm){
     console.log(regForm.value);
     //console.log(this.regForm.value);
   }
  ngOnInit() {
    this.regForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      sname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      dob:new FormControl('',[Validators.required]),
      gender:new FormControl('',),
      email:new FormControl('',[Validators.required,Validators.email]),
      pwd:new FormControl('',[Validators.required]),
      cnfpass:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}'),Validators.maxLength(10)]),
      aadhar:new FormControl('',[Validators.required,Validators.pattern('[0-9]{12}'),Validators.maxLength(12)]),
      address:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),

    });
  }

}
