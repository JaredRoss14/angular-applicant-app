// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material UI import
import { MyOwnCustomMaterialModule } from './material';

// Local Imports
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeaderComponent } from './header/header.component';
import { GeneralApplicantsComponent } from './home/general-applicants/general-applicants.component';
import { FooterComponent } from './footer/footer.component';
import { FavoriteApplicantsComponent } from './home/favorite-applicants/favorite-applicants.component';
import { FavoritePanelComponent } from './home/favorite-panel/favorite-panel.component';
import { AppComponent } from './app.component';
import { GeneralPanelComponent } from './home/general-panel/general-panel.component';
import { SearchPageComponent } from './search-page/search-page.component';

// Pipes
import { SearchPipe } from './search-page/searchpipe.pipe';

// Routing Import
import { AppRoutingModule, RoutingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroBannerComponent,
    FavoriteApplicantsComponent,
    GeneralApplicantsComponent,
    FavoritePanelComponent,
    FooterComponent,
    RoutingComponents,
    GeneralPanelComponent,
    SearchPageComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
