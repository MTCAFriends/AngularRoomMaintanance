  import { Component, OnInit } from '@angular/core';
  //import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  addUser(regForm){
    console.log(regForm.value);
  }
    
  constructor() { 
    // this.regForm=this.fb.group({
    //   name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    //   sname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    //   dob:'',
    //   gender:'',
    //   emailCtrl:'',
    //   pwd:'',
    //   conpwd:'',
    //   mobile:'',
    //   aadhar:'',

    // })

  }
  // onSubmit(){
  //   console.log(this.regForm.value);
  // }
  genderList:string[]=['Male','Female','Other'];

  ngOnInit() {
  }

}
