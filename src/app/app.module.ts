import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertMilleToKmPipe } from './convert-mille-to-km.pipe';

@NgModule({
  declarations: [AppComponent, ConvertMilleToKmPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
