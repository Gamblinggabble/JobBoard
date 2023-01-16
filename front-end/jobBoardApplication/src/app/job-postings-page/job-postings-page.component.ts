import { Component } from '@angular/core';
import * as $ from "jquery";
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';

@Component({
  selector: 'app-job-postings-page',
  templateUrl: './job-postings-page.component.html',
  styleUrls: ['./job-postings-page.component.scss']
})
export class JobPostingsPageComponent {

  jobposts: JobPost[] = [];

  constructor(private jobpostService: JobpostService) {}

  ngOnInit(): void{
    this.jobpostService.findAll().subscribe(data =>
      this.jobposts = data
    )
    //this.jobPostingsToggle();
  };

  // jobPostingsToggle(){
  //   let listItems = document.getElementsByClassName('list-group-item list-group-item-action');
  //   listItems.forEach(element => {
  //     element.classList.toggle('active');
  //   });

  // }
}