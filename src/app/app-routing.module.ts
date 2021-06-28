import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PrivacyComponent } from './privacy/privacy.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MosqueeComponent } from './mosquee/mosquee.component';
import { InstitutComponent } from './institut/institut.component';
import { EvenementMosqueeComponent } from './evenement-mosquee/evenement-mosquee.component';
import { EvenementInstitutComponent } from './evenement-institut/evenement-institut.component';
import { InformationCovidComponent } from './information-covid/information-covid.component';
import { InformationPrayerTimeComponent } from './information-prayer-time/information-prayer-time.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./accueil/landing.module').then(m => m.LandingModule)},
  //{ path: 'privacy', component: PrivacyComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full'  },
 // { path: '**', component: PageNotFoundComponent },
  { path : 'mosquee', component: MosqueeComponent},
  { path : 'institut', component: InstitutComponent},
  { path : 'evenementMosquee', component: EvenementMosqueeComponent},
  { path : 'evenementInstitut', component: EvenementInstitutComponent},
  { path : 'informationCovid', component: InformationCovidComponent},
  { path : 'informationPriere', component: InformationPrayerTimeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
