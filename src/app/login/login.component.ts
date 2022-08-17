import jwtDecode from 'jwt-decode';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required ,Validators.minLength(3),Validators.maxLength(12),Validators.pattern(/^[0-9]/)]),
});
apidata:any;
userName:string='';
sendData(form:any)
{
  
  if(form.valid){
    this._AuthonticationService.signIn(form.value).subscribe({
      next:(data)=>{
        this.apidata = data.message;
        if(data.message == 'success')
        {
          localStorage.setItem('token',data.token)
          // this._AuthonticationService.isLogin = data.token;
         
          let userData:any = jwtDecode(data.token);
          this._AuthonticationService.userName =userData.first_name;
          this._AuthonticationService.isLogin.next(data.token);
          this._router.navigate(['/home'])
         
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }
  else
  {
    console.log('inputs error');
    
  }


  
}

  constructor(private _AuthonticationService:AuthonticationService ,private _router:Router) { }


  ngOnInit(): void {
  
      
}

}
