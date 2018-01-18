import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DashboarderComponent } from './dashboarder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DashboarderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [DashboarderComponent]
})
export class DashboarderModule { }
