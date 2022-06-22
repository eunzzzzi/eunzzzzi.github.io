import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTreeModule
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
  ],
})
export class SharedModule {

}
