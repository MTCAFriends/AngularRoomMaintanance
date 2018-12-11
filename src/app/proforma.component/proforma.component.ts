import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.css']
})
export class ProformaComponent implements OnInit {
  userList:string[]=['Devaraja','Subbu','Purushotham','Pavan','Vijay','Govardhan'];
  itemList:string[]=['Rice','Vegitables','Masala Pouder','Gass','Water','Chicken'];
  proformaForm:FormGroup;

addItems(proformaForm){
  console.log(proformaForm.value);
}
  constructor() { }

  ngOnInit() {
    this.proformaForm=new FormGroup({
      tdate:new FormControl('',[Validators.required]),
      selectUser:new FormControl('',[Validators.required]),
      dob:new FormControl('',[Validators.required]),
      itemNames:new FormControl('',[Validators.required,Validators.email]),
      amount:new FormControl('',[Validators.required]),
    });
  }
}
