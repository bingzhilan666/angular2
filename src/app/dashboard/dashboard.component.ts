import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Hero} from "../heroes/Hero";
import {HeroService} from "../heroes/hero.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }


  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
  @Input() hero: Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();

}

