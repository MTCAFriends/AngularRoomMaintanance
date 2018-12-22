  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, FormArray,Validators, FormControl} from '@angular/forms';
  import { Router }  from '@angular/router';
  import { Http,Headers } from '@angular/http';
  
  import { Iuser } from './user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm:FormGroup;

  constructor(private _http:Http,private _router: Router) { 
    
    
  }
   addUser(regForm){
    
    if(regForm.valid)
    {
     console.log(regForm.value);
     
      // let data={
      //   "user_name":regForm.value.name,
      //   "user_sname":regForm.value.sanme,
      //   "user_dob":regForm.value.dob,
      //   "user_gender":regForm.value.gender,
      //   "user_email":regForm.value.email,
      //   "user_pwd":regForm.value.pwd,
      //   "user_cnfpss":regForm.value.cnfpss,
      //   "user_mobile":regForm.value.mobile,
      //   "user_aadhar":regForm.value.aadhar,
      //   "user_address":regForm.value.address
      // }
      //   return this._http.post("Save-uer-deatils", data,
      //   {headers:Headers}).subscribe(
      //     (res)=>{console.log(res),
      //     (err)=>{console.log("Error");}
      //   }
      //   );
      regForm.reset();
      
       }
       else{
        alert("Please fill all fields");
       }

       // onSubmit = function (user) {
      //   console.log(user.value);
        
      //   var data= {
      //   "name": user.value.name,
      //   "first_name": user.value.first_name,
      //   "last_name": user.value.last_name,
      //   "creator_email": user.value.email,
      //   }
        
      //   return this.http.post("http://www.your/api/here.com", data, 
      //   {headers:headers}).subscribe(
      //   (res)=>{
      //    // console.log('success');
      //   console.log(res);
      //   },
      //   err=>{
      //   console.log(" Error..");
      //    } 
      //    );


      //  post(url: string, model: any): Observable <any> {
      //   let formData: FormData = new FormData(); 
      //   formData.append('id', model.id); 
      //   formData.append('applicationName', model.applicationName); 
      //   return this._http.post(url, formData)
      //       .map((response: Response) => {
      //           return response;
      //       }).catch(this.handleError); 
      //  }

      // onSubmit = function (user) {
      //   console.log(user);
    
      //   var body = "firstname=" + user.firstname + "&lastname=" + user.lastname + "&name=" + user.name;
      //   this.http.post("http://www.testtttt.com", body).subscribe((data) => {});
    
      // }

      // 
      

      
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
  onBack(): void { 
    this._router.navigate(['/login']); 
 } 

}
