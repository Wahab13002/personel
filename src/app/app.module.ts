import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MosqueeComponent } from './mosquee/mosquee.component';
import { InstitutComponent } from './institut/institut.component';
import { ContactComponent } from './contact/contact.component';
import { EvenementMosqueeComponent } from './evenement-mosquee/evenement-mosquee.component';
import { EvenementInstitutComponent } from './evenement-institut/evenement-institut.component';
import { InformationCovidComponent } from './information-covid/information-covid.component';
import { InformationPrayerTimeComponent } from './information-prayer-time/information-prayer-time.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MosqueeComponent,
    InstitutComponent,
    ContactComponent,
    EvenementMosqueeComponent,
    EvenementInstitutComponent,
    InformationCovidComponent,
    InformationPrayerTimeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
