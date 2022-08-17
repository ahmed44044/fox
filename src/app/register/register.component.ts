import { AuthonticationService } from './../authontication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // first_name = new FormControl();
  registerationForm = new FormGroup({
    first_name : new FormControl('',[Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    last_name : new FormControl('',[Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    age : new FormControl('',[ Validators.required,Validators.min(15),Validators.max(100)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required ,Validators.minLength(3),Validators.maxLength(12),Validators.pattern(/^[0-9]/)]),
});
apidata:any;
sendData(form:any)
{
  
  if(form.valid){
    this._AuthonticationService.signUp(form.value).subscribe({
      next:(data)=>{
        console.log(data);
        this.apidata = data.message;
        if(data.message == 'success')
        {
          this._router.navigate(['/login'])
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
