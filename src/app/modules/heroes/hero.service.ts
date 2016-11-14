import { Injectable } from '@angular/core';
import { HEROES }     from './hero-detail/mock-heroes';
import {Logger} from "../../service/logger.service";
@Injectable()
export class HeroService {
  constructor(private logger: Logger) {  }
  getHeroes() {
    this.logger.log('Getting heroes ...');
    console.log(this.logger.logs);
    return HEROES;
  }
}
