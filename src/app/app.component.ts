import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dash2';

  hover(event: any, type: string) {

    event.target.attributes.style.value = type === 'over' ? 'width: 95%' : 'width: 90%'
  }
}

