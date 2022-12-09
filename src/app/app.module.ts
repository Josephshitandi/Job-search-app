import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AlmniPortalComponent } from './components/almni-portal/almni-portal.component';
import { FindJobComponent } from './components/find-job/find-job.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ApplyJobComponent } from './components/apply-job/apply-job.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent,
    AlmniPortalComponent,
    FindJobComponent,
    JobDescriptionComponent,
    ProfileComponent,
    ApplyJobComponent,
    HeadlineComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
