import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.css']
})
export class ProformaComponent implements OnInit {
  userList:string[]=['Devaraja','Subbu','Purushotham','Pavan','Vijay','Govardhan'];

  constructor() { }

  ngOnInit() {
    
  }
}
