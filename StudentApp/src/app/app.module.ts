import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpModule }from '@angular/http';
import{ FormsModule }from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from 'src/RootConfigration/StudentService';
import { HomeComponent } from 'src/RootConfigration/HomeComponent/HomeComponent';
import { RouterModule } from '@angular/router';
import { rootConfig } from 'src/RootConfigration/RootConfigration';
import { AddComponent } from 'src/RootConfigration/AddComponent/AddComponent';
import { PageNotFound } from 'src/RootConfigration/PageNotFound';
import { EditComponent } from 'src/RootConfigration/EditComponent/EditComponent';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    AddComponent,
    PageNotFound,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootConfig),
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
