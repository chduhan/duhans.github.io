import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderDuhansComponent } from './header-duhans/header-duhans.component';
import { FooterDuhansComponent } from './footer-duhans/footer-duhans.component';
import { BooksDuhansComponent } from './books-duhans/books-duhans.component';
import { CampusDuhansComponent } from './campus-duhans/campus-duhans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDuhansComponent,
    FooterDuhansComponent,
    BooksDuhansComponent,
    CampusDuhansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule, ReactiveFormsModule,FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
