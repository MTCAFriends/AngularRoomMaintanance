import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photo:string="../app/images/Deva.jpg";
  constructor(private _router: Router) { }
//   onProforma(): void { 
//     this._router.navigate(['/proforma']); 
//  } 


  ngOnInit() {
  }

}
