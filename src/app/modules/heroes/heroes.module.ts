import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesComponent} from './heroes.component';
import {HeroService} from "./hero.service";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {Logger} from "../../service/logger.service";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroDetailComponent,
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
