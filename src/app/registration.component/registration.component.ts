  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, FormArray,Validators, FormControl} from '@angular/forms';
import { analyzeNgModules } from '@angular/compiler';
import { INVALID } from '@angular/forms/src/model';

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
    
    // let gender:string;
    // gender=regForm.get('gender').value;
    // if(gender==undefined){
    //   alert("please select Gender");
    // }
         //console.log(this.regForm.value);
    //  userName=this.regForm.get('name').value;
    //  if(userName==undefined){
    //   alert("Please fill all the fields");
    //  }
    
    //console.log(userName);
    if(regForm.valid)
    {
      console.log(regForm.value);
      
       }
       else{
        alert("Please fill all fields");
       }
   }
  ngOnInit() {
    this.regForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      sname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      dob:new FormControl('',[Validators.required]),
      gender:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      pwd:new FormControl('',[Validators.required]),
      cnfpass:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}'),Validators.maxLength(10)]),
      aadhar:new FormControl('',[Validators.required,Validators.pattern('[0-9]{12}'),Validators.maxLength(12)]),
      address:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
      //hobbies:new FormArray([]),
      
    });
    
   
  }
  // addHobby(){
  //   (<FormArray>this.regForm.get('hobbies')).push(new FormControl(''));
  // }
  
  // deleteHobby(index:number){
  //   (<FormArray>this.regForm.get('hobbies')).removeAt(index);
  // }
}
