import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDataService } from 'src/ProductDataService/ProductDataService';
import { RouterModule } from '@angular/router';
import { routeConfig } from 'src/RouterConfigration/RouterConfigration';
import { WelcomeComponent } from 'src/WelcomeComponet/WelcomeComponent';
import { ProductListComponent } from 'src/ProductListComponent/ProductListComponent';
import { PageNotFound } from 'src/PageNotFound/PageNotFound';
import { StarComponent } from 'src/StarComponet/StarComponent';
import { ProductDetailComponent } from 'src/ProductDetailComponent/ProductDetailComponent';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    PageNotFound,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
