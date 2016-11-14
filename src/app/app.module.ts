import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroesModule} from './modules/heroes/heroes.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./modules/heroes/heroes.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    RouterModule.forRoot([
      {path:'login',component: LoginComponent},
      {path:'heroes', component: HeroesComponent},
      {path:'', redirectTo: '/login', pathMatch: 'full'}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
