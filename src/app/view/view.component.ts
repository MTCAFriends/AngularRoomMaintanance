import { Component, OnInit, Input } from '@angular/core';
import{ RegistersUsersService } from '../registers-users.service';
import { Iuser } from '../registration.component/user';


 
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  //providers:[RegistersUsersService]
})
export class ViewComponent implements OnInit {
 // @Input('parentText')parentTextBoxValue:string;

  userData:Iuser[];


  constructor(private _register:RegistersUsersService) {
   // this.userData=this._register.getUserDetails();
   _register.getUsers().subscribe(p=>this.userData=p);
   }

  ngOnInit() {
  }

}
