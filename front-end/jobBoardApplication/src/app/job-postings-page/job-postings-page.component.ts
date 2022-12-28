import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-job-postings-page',
  templateUrl: './job-postings-page.component.html',
  styleUrls: ['./job-postings-page.component.scss']
})
export class JobPostingsPageComponent {
  ngOnInit(): void{
    console.log('ready'); 
    //this.jobPostingsToggle();
  };

  // jobPostingsToggle(){
  //   let listItems = document.getElementsByClassName('list-group-item list-group-item-action');
  //   listItems.forEach(element => {
  //     element.classList.toggle('active');
  //   });

  // }
}
