import { Injectable } from '@angular/core';
import { HEROES }     from './hero-list/mock-heroes';
import { Logger }     from '../service/logger.service';
@Injectable()
export class HeroService {
  constructor(private logger: Logger) {  }
  getHeroes() {
    this.logger.log('Getting heroes ...');
    return HEROES;
  }
}
