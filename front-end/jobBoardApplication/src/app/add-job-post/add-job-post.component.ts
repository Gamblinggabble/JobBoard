import { Component } from '@angular/core';
import { data } from 'jquery';
import { CompanyService } from '../company.service';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.css']
})
export class AddJobPostComponent {

constructor(private jobpostService:JobpostService,private companyService:CompanyService){}

//company1 = this.companyService.findById(1);
company1 = {
  id: 1,
    name: "sap",
    email: "sap@abv.bg",
    phoneNumber: "0893572342",
    city: "Haskovo",
    address: "Haskovo 1",
    website: "SAP.com",
    description: "asdmaslkdmaslkdmsaldmaslkdmaslkdmlksamdla",
    password: "1234",
    imageUrl: "dasdsada",
}

today = new Date();

jobpost = {
  id: 1000,
    title: " ",
    company: this.company1,
    city: " ",
    date: this.today,
    description: " "
}

getVal(name: string,city: string,description: string){
  this.jobpost = {
    id: 1000,
      title: name,
      company: this.company1,
      city: city,
      date: this.today,
      description: description
  }

  this.jobpostService.addJobPost(this.jobpost);
}

}
