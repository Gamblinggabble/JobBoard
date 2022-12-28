import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobPostingsPageComponent } from './job-postings-page/job-postings-page.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobPostingListItemComponent } from './job-posting-list-item/job-posting-list-item.component';
import { JobPostingDetailsComponent } from './job-posting-details/job-posting-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JobPostingsPageComponent,
    CompaniesPageComponent,
    AboutPageComponent,
    JobPostingListItemComponent,
    JobPostingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
