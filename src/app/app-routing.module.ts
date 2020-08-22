import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from "./pages/profile/profile.component";
import {ProfileCardComponent} from "./pages/profile-card/profile-card.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
    data: {animation: 'landing-page'}
  },
  {
    path: 'profile-card',
    component: ProfileCardComponent,
    data: {animation: 'profile-card'}
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {animation: 'portfolio'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {animation: 'about'}
  },
  {
    path: 'contact',
    redirectTo: '/profiles'
  },
  {
    path: 'profiles',
    component: ContactComponent,
    data: {animation: 'contact'}
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
