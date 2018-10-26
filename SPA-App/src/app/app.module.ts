import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routeConfig } from 'src/RouterComponent/RouterConfig';
import { HomeComponent } from 'src/RouterComponent/HomeComponent/HomeComponent';
import { AboutComponent } from 'src/RouterComponent/AboutComponent/AboutComponet';
import { CarrierComponent } from 'src/RouterComponent/CarrierComponent/CarrierComponent';
import { PageNotFound } from 'src/RouterComponent/PageNotFound';
import { EmployeeComponent } from 'src/RouterComponent/EmployeeComponent/EmployeeComponent';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CarrierComponent,
    PageNotFound,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(routeConfig),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
