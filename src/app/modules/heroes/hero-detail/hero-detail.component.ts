import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import {HeroService} from "../hero.service";


@Component({
  selector: 'hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroes: Hero[];
  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {
  }

}
