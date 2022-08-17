import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarfooterComponent } from './navbarfooter/navbarfooter.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { LogoutComponent } from './logout/logout.component';
import { SinglemoviesComponent } from './singlemovies/singlemovies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    PepoleComponent,
    RegisterComponent, 
    LoginComponent,
    NavbarComponent,
    NavbarfooterComponent,
    FooterComponent,
    AboutComponent,
    NetworkComponent,
    TvshowComponent,
    LogoutComponent,
    SinglemoviesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
