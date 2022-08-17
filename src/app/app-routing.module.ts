import { PathGuard } from './path.guard';
import { SinglemoviesComponent } from './singlemovies/singlemovies.component';
import { LogoutComponent } from './logout/logout.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NetworkComponent } from './network/network.component';
import { PepoleComponent } from './pepole/pepole.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'home',component:HomeComponent, canActivate:[PathGuard]},
  {path:'about',component:AboutComponent, canActivate:[PathGuard]},
  {path:'movies',component:MoviesComponent, canActivate:[PathGuard]},
  {path:'singlemovies/:id/:name',component:SinglemoviesComponent, canActivate:[PathGuard]},
  {path:'tvshow',component:TvshowComponent, canActivate:[PathGuard]},
  {path:'logout',component:LogoutComponent},
  {path:'pepole',component:PepoleComponent, canActivate:[PathGuard]},
  {path:'network',component:NetworkComponent, canActivate:[PathGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
