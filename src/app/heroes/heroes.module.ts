import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesComponent} from './heroes.component';
import {HeroService} from "./hero.service";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {Logger} from "../service/logger.service";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeroListComponent,
    HeroesComponent
  ],
  providers: [
    HeroService,
    Logger
  ],
  exports: [HeroesComponent]
})
export class HeroesModule {
}
