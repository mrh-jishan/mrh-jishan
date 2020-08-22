import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {ProfileCardComponent} from './pages/profile-card/profile-card.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {APP_BASE_HREF} from "@angular/common";
import { NavigatorComponent } from './components/navigator/navigator.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {ProjectDataService} from "./services/project-data.service";
import {TagsService} from "./services/tags.service";
import {SkillsService} from "./services/skills.service";
import {MaxLengthPipe} from "./pipes/max-length.pipe";
import {NoEmojiPipe} from "./pipes/no-emoji.pipe";
import { DpLogoComponent } from './components/dp-logo/dp-logo.component';
import { TypingComponent } from './components/typing/typing.component';
import { BackIconComponent } from './components/back-icon/back-icon.component';
import { KeySkillBtnsComponent } from './components/key-skill-btns/key-skill-btns.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EscCancelationDirective} from "./directives/esc-cancelation.directive";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileCardComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    NavigatorComponent,
    LandingPageComponent,
    MaxLengthPipe,
    NoEmojiPipe,
    DpLogoComponent,
    TypingComponent,
    BackIconComponent,
    KeySkillBtnsComponent,
    ProjectsComponent,
    EscCancelationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProjectDataService,
    TagsService,
    SkillsService,
    {provide: APP_BASE_HREF, useValue: '!'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
