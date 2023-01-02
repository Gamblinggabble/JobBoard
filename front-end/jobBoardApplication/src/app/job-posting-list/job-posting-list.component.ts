import { Component } from '@angular/core';
import { JobPost } from '../job-post';
import { JobpostService } from '../jobpost-service.service';


@Component({
  selector: 'app-job-posting-list-item',
  templateUrl: './job-posting-list.component.html',
  styleUrls: ['./job-posting-list.component.scss']
})
export class JobPostingListComponent {

  jobposts: JobPost[] = [];

  constructor(private jobpostService: JobpostService) {}

  ngOnInit(): void{
    this.jobpostService.findAll().subscribe(data =>
      this.jobposts = data
    )
  };

}
