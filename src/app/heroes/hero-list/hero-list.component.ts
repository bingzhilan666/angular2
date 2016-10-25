import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import {HeroService} from "../hero.service";


@Component({
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {
  }

}
