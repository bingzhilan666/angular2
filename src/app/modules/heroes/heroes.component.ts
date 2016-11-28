import { Component }          from '@angular/core';

@Component({
  selector: 'my-heroes',
  template: `
  <h2>Heroes</h2>
  <hero-detail></hero-detail>
  <div style="width: 100px;height: 100px;border: 1px solid red; "></div>
  `
})
export class HeroesComponent {
  constructor() {}
}
