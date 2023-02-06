import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.css']
})
export class AddJobPostComponent {

constructor(private jobpostService:JobpostService,private companyService:Company){}

jobpost = {
  id: 0,
  title: " ",
  city: " ",
  company: " ",
  date: " ",
  description: " "
  };

getVal(name:string,city:string,date:string,declarations:string)
{

    this.jobpost = {
    id: 0,
    title: " ",
    city: " ",
    company: 1,
    date: " ",
    description: " "
    };

    this.jobpostService.addJobPost(this.jobpost)

}

}
