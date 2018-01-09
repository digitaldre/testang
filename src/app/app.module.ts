import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatListModule, MatGridListModule, MatMenuModule, MatButtonModule, MatCardModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { DishService } from './services/dish.service';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule, 
    MatCardModule,
    FlexLayoutModule,
    DishService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
