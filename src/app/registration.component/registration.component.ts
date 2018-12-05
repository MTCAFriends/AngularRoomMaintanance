	import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    regForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.regForm=this.fb.group({
      name:'',
      sname:'',
      dob:'',
      gender:'',
      emailCtrl:'',
      pwd:'',
      conpwd:'',
      mobile:'',
      aadhar:'',

    })

  }
  onSubmit(){
    console.log(this.regForm.value);
  }
  genderList:string[]=['Male','Female','Other'];

  ngOnInit() {
  }

}
