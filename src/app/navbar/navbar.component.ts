import { Router } from '@angular/router';
import { AuthonticationService } from './../authontication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userLogin:any;
userName:any;
  constructor(private _authontication:AuthonticationService ,private _router:Router) { }
  logOut(){
    localStorage.removeItem('token')
    this._authontication.isLogin.next(null);
    this._router.navigate(['/login'])
    this.userName='';

  }
  ngOnInit(): void {
    // this.userLogin = this._authontication.isLogin;
    this._authontication.isLogin.subscribe({
      next:(newValue)=>{
        this.userLogin =newValue;
        this.userName =this._authontication.userName;
        // this._authontication.userName='';
      },
    });
  }


}
