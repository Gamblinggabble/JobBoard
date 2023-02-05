import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobPostingsPageComponent } from './job-postings-page/job-postings-page.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobPostingListComponent } from './job-posting-list/job-posting-list.component';
import { JobPostingDetailsComponent } from './job-posting-details/job-posting-details.component';
import { JobPostingsSearchComponent } from './job-postings-search/job-postings-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplyPageComponent } from './apply-page/apply-page.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPersonPageComponent } from './registration-person-page/registration-person-page.component';
import { RegistrationCompanyPageComponent } from './registration-company-page/registration-company-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JobPostingsPageComponent,
    CompaniesPageComponent,
    AboutPageComponent,
    JobPostingListComponent,
    JobPostingDetailsComponent,
    JobPostingsSearchComponent,
    ApplyPageComponent,
    ApplyFormComponent,
    LoginPageComponent,
    RegistrationPersonPageComponent,
    RegistrationCompanyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
