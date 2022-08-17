import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
// isLogin:any =null;
isLogin = new BehaviorSubject(null);

userName:string='';
  constructor(private _HttpClinet:HttpClient) {
  let token:any=  localStorage.getItem('token')
  if(token !=null){
 let userData:any = jwtDecode(token);
 console.log(userData.first_name);
 this.userName= userData.first_name;
  }
//  this.isLogin =token;
this.isLogin.next(token);
   }
  signUp(userData:any):Observable<any> {
    return this._HttpClinet.post('https://route-egypt-api.herokuapp.com/signup',userData);
  };
  signIn(userData:any):Observable<any>
  {
   return this._HttpClinet.post('https://route-egypt-api.herokuapp.com/signin ',userData);
  }
}
