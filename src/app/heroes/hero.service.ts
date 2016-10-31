import { Injectable } from '@angular/core';
import { HEROES }     from './hero-list/mock-heroes';
import { Logger }     from '../service/logger.service';
import {Hero} from "./Hero";
@Injectable()
export class HeroService {
  constructor(private logger: Logger) {  }
  getHeroes(): Promise<Hero[]> {
    this.logger.log('Getting heroes ...');
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
