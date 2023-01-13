import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroModule } from './registro/registro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegistroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
