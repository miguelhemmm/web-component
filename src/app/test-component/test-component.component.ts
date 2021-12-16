import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UiService } from './ui.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestComponentComponent implements OnInit {

  fruits: any[] = [];

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.getFruits().subscribe(fruits => {
      this.fruits = fruits;
      console.log(fruits)
    })
  }



}
