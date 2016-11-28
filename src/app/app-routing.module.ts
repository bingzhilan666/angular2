import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeroesComponent} from "./modules/heroes/heroes.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'login',component: LoginComponent},
      {path:'heroes', component: HeroesComponent},
      {path:'', redirectTo: '/login', pathMatch: 'full'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
