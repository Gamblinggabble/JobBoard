import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobPostingsPageComponent } from './job-postings-page/job-postings-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPersonPageComponent } from './registration-person-page/registration-person-page.component';
import { RegistrationCompanyPageComponent } from './registration-company-page/registration-company-page.component';
import { ApplyPageComponent } from './apply-page/apply-page.component';
import { PersonalProfileMenuPageComponent } from './personal-profile-menu-page/personal-profile-menu-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddJobPostComponent } from './add-job-post/add-job-post.component';

const routes: Routes = [
  {path: 'home-page-component', component: HomePageComponent},
  {path: 'job-postings-page-component', component: JobPostingsPageComponent},
  {path: 'companies-page-component', component: CompaniesPageComponent},
  {path: 'about-page-component', component: AboutPageComponent},
  {path: 'apply-page-component', component: ApplyPageComponent},
  {path: 'login-page-component', component: LoginPageComponent},
  {path: 'registration-person-page-component', component: RegistrationPersonPageComponent},
  {path: 'registration-company-page-component', component: RegistrationCompanyPageComponent},
  {path: 'app-personal-profile-menu-page', component: PersonalProfileMenuPageComponent},
  {path: 'update-personal-profile-page', component: UpdateProfileComponent},
  {path: 'create-job-post', component: AddJobPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
