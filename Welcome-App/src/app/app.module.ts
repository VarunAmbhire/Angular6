import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule} from '@angular/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from '../welcome/welcomecomponent';
import { QuestionBankService } from '../QuetionBanks/QuestionBankService';
import { QuestionBankComponent } from '../QuetionBanks/QuestionBankComponent';
import { ResponsiveWebComponent } from '../ResponsiveWeb/ResponsiveWebCompopnent';
import { StudentApiComponent } from '../StudentApi/StudentApiComponent';
import { isMaleToText } from '../StudentApi/isMaleToText';
import { StudentApiService } from '../StudentApi/StudentApiService';
import { Summary } from '../ResponsiveWeb/Summary';
import { ParentChildComponent } from '../ParentComponent/ParentChildComponent';
import { ToggleButtonComponent } from '../ParentComponent/ToggleButtonComponet';
import { StarButtonComponent } from '../ParentComponent/StarButtonComponent';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResponsiveWebComponent,
    Summary,
    ParentChildComponent,
    ToggleButtonComponent,
    StarButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
