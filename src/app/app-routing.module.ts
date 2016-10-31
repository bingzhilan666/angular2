import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent} from "./heroes/hero-list/hero-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroListComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
