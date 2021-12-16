import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule
  ],
  entryComponents: [ ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(TestComponentComponent, { injector: this.injector });
    customElements.define('test-component', el);
  }
}

