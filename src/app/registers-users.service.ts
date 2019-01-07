import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Iuser } from './registration.component/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistersUsersService {
  private url:string="https://jsonplaceholder.typicode.com/users";
  constructor( private http:Http) { }
  // getUserDetails():Iuser[]{
  //   return [
  //     {name:'deva', sname:'raja', dob:'06-06-1993',gender:'male',email:'devaraja.gmp@gmail.com',
  //      pwd:'hjgj',cnfpss:'adaa',mobile:7730004426,aadhar:957974200655,address:'jladjlfkjldk'}
      
  //   ];

 // }
 getUsers():Observable<Iuser[]>{
  return this.http.get(this.url)
  .pipe(map((res: Response) => res.json()));
  //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
 }
}
