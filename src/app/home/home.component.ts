import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _Api:ApiService) { }
  // totalLength:any;
  pages:number[] =[];
  pagaNumber:number=20;
  moviesContainer:any[] = [];
  term:string='';
    imgPath:string ='https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
  
      this.pages = new Array(this.pagaNumber).fill(1).map((x,i)=>i+1);
      this._Api.getAllMovies(1).subscribe({
        next:(data)=>{
          this.moviesContainer = data.results
          // console.log(this.moviesContainer);
          
          // this.totalLength=data.total_pages;
          // console.log(this.totalLength);
          
          // console.log(this.moviesContainer)
        } ,
        error:(err)=> {
           console.log(err);
          
          
        }
        
      })
  }

  test(pagaNumber:number)
  {
    this._Api.getAllMovies(pagaNumber).subscribe({
      next:(data)=>{
        this.moviesContainer = data.results
        // console.log(this.moviesContainer);
        
        // this.totalLength=data.total_pages;
        // console.log(this.totalLength);
        
        // console.log(this.moviesContainer)
      } ,
      error:(err)=> {
         console.log(err);
        
        
      }
      
    })
}

}
