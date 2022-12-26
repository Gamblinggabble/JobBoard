import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobPostingsPageComponent } from './job-postings-page/job-postings-page.component';

const routes: Routes = [
  {path: 'home-page-component', component: HomePageComponent},
  {path: 'job-postings-page-component', component: JobPostingsPageComponent},
  {path: 'companies-page-component', component: CompaniesPageComponent},
  {path: 'about-page-component', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
