import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private _Api:ApiService) { }

  moviesContainer:any[] = [];
  imgPath:string ='https://image.tmdb.org/t/p/w500';
  term:string='';

  ngOnInit(): void {
    
    // this._Api.getNetwork().subscribe({
    //   next:(data)=>{
    //     console.log(data.results);
    //     this.moviesContainer = data.results;
    //     console.log(this.moviesContainer)
    //   } ,
    //   error:(err)=> {
    //      console.log(err);
        
        
    //   }
      
    // })
  }

}
