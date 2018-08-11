import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
    <p>
      component1 works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
