import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-reposts',
  templateUrl: './reposts.component.html',
  styleUrls: ['./reposts.component.css']
})
export class RepostsComponent implements OnInit {

  
  constructor() {
    
   }
   userList:string[]=['Devaraja','Subbu','Pavan','Purushotham','Vijay','Govardhan'];
  ngOnInit() {
     
  }

}
