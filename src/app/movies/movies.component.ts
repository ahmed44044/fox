import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _ApiService:ApiService) { }
  moviesContainer:any[] = [];
  imgPath:string ='https://image.tmdb.org/t/p/w500';
  term:string='';
  data = new Subscription();
  ngOnInit(): void {
  this.data= this._ApiService.getNowPlaying().subscribe({
      next:(data)=>{
        // console.log(data.results);
        this.moviesContainer = data.results;
        // console.log(this.moviesContainer)
      } ,
      error:(err)=> {
         console.log(err);
        
        
      }
      
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.data.unsubscribe();
  }

}
