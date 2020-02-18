import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TheteamComponent } from './theteam/theteam.component';
import { LightboxModule } from 'ngx-lightbox';
 
import {ProgressBarModule} from "angular-progress-bar"


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutusComponent,
    RecipeComponent, 
    NavbarComponent, FooterComponent, TheteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    LightboxModule,
    ProgressBarModule   

  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
