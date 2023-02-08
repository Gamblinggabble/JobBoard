import { Component } from '@angular/core';
import { data } from 'jquery';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.css']
})
export class AddJobPostComponent {

  constructor(private jobpostService: JobpostService, private companyService: CompanyService) { }

  company!: Company;

  // company1 = {
  //   id: 1,
  //     name: "sap",
  //     email: "sap@abv.bg",
  //     phoneNumber: "0893572342",
  //     city: "Haskovo",
  //     address: "Haskovo 1",
  //     website: "SAP.com",
  //     description: "asdmaslkdmaslkdmsaldmaslkdmaslkdmlksamdla",
  //     password: "1234",
  //     imageUrl: "dasdsada",
  // }

  today = new Date();

  jobpost = {
    id: 1000,
    title: " ",
    company: this.company,
    city: " ",
    date: this.today,
    description: " "
  }

  async getVal(name: string, city: string, description: string) {

    const response = await (await this.companyService.findById(2)).subscribe(data => this.company = data);

    this.jobpost = {
      id: 1000,
      title: name,
      company: this.company,
      city: city,
      date: this.today,
      description: description
    }

    this.jobpostService.addJobPost(this.jobpost);
  }

}
