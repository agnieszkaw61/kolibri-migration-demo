import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {defineCustomElements} from '@public-ui/components/dist/loader';
import {BMF} from '@public-ui/themes';
import {KoliBriDevHelper, register} from '@public-ui/components';
import {customAlert} from './customAlert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    register(BMF, defineCustomElements)
      .then(() => {
        KoliBriDevHelper.patchTheme('bmf', customAlert);
      })
      .catch(console.warn);
  }
}
