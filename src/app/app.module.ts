import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './header/side-nav/side-nav.component';
import {ScrollProgressComponent} from "./scroll-progress/scroll-progress.component";
import {MatTreeModule} from "@angular/material/tree";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    ScrollProgressComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    MatTreeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
