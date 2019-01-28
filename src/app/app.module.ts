import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { HotelDetailComponent } from './hotel-view/hotel-detail/hotel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    HotelViewComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
