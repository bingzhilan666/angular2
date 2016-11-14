import { Component }          from '@angular/core';

@Component({
  selector: 'my-heroes',
  template: `
  <h2>Heroes</h2>
  <hero-detail></hero-detail>
  `
})
export class HeroesComponent {
  constructor() {}
}
