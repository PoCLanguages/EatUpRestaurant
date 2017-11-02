import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainSliderContentComponent } from './main/main-slider-content/main-slider-content.component';
import { MainSliderFeaturedComponent } from './main/main-slider-featured/main-slider-featured.component';
import { MainWelcomeComponent } from './main/main-welcome/main-welcome.component';
import { SubfooterComponent } from './footer/subfooter/subfooter.component';
import { MainCategoriesComponent } from './main/main-categories/main-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    MainSliderContentComponent,
    MainSliderFeaturedComponent,
    MainWelcomeComponent,
    SubfooterComponent,
    MainCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
