import { Component, Input, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {HeroService} from "../hero.service";


@Component({
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input()
  hero: Hero;
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    this.location.back();
  }


}
