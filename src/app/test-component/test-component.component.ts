import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hover(event: any, type: string) {

    event.target.attributes.style.value = type === 'over' ? 'width: 95%' : 'width: 90%'
  }

}
