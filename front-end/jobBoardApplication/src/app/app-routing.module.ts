import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobPostingsPageComponent } from './job-postings-page/job-postings-page.component';
import { ApplySuccessPageComponent } from './apply-success-page/apply-success-page.component';
import { ChangePasswordSuccessPageComponent } from './change-password-success-page/change-password-success-page.component';
import { CreatePostingSuccessPageComponent } from './create-posting-success-page/create-posting-success-page.component';
import { UpdateProfileSuccessPageComponent } from './update-profile-success-page/update-profile-success-page.component';
import { PostingCandidatesPageComponent } from './posting-candidates-page/posting-candidates-page.component';
import { NoActivePostingsComponent } from './no-active-postings/no-active-postings.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPersonPageComponent } from './registration-person-page/registration-person-page.component';
import { RegistrationCompanyPageComponent } from './registration-company-page/registration-company-page.component';
import { ApplyPageComponent } from './apply-page/apply-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddJobPostComponent } from './add-job-post/add-job-post.component';
import { CompanyProfileMenuComponent } from './company-profile-menu/company-profile-menu.component';
import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';

const routes: Routes = [
  {path: 'home-page-component', component: HomePageComponent},
  {path: 'job-postings-page-component', component: JobPostingsPageComponent},
  {path: 'companies-page-component', component: CompaniesPageComponent},
  {path: 'about-page-component', component: AboutPageComponent},
  {path: 'apply-page-component', component: ApplyPageComponent},
  {path: 'apply-success-page-component', component: ApplySuccessPageComponent},
  {path: 'change-password-success-page-component', component: ChangePasswordSuccessPageComponent},
  {path: 'create-posting-success-page-component', component: CreatePostingSuccessPageComponent},
  {path: 'update-profile-success-page-component', component: UpdateProfileSuccessPageComponent},
  {path: 'posting-candidates-page-component', component: PostingCandidatesPageComponent},
  {path: 'no-active-postings-component', component: NoActivePostingsComponent},
  {path: 'login-page-component', component: LoginPageComponent},
  {path: 'registration-person-page-component', component: RegistrationPersonPageComponent},
  {path: 'registration-company-page-component', component: RegistrationCompanyPageComponent},
  {path: 'update-personal-profile-page', component: UpdateProfileComponent},
  {path: 'add-job-post-page', component: AddJobPostComponent},
  {path: 'company-profile-menu', component: CompanyProfileMenuComponent},
  {path: 'user-profile-menu', component: UserProfileMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
