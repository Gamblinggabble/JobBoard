import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobPost } from './job-post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobpostService {

  private jobpostsUrl: string;

  constructor(private http: HttpClient) { 
    this.jobpostsUrl = 'http://localhost:4200/api/jobposts';
  }

  public findAll(): Observable<JobPost[]> {
    return this.http.get<JobPost[]>(this.jobpostsUrl);
  }

  public findById(id: number): Observable<JobPost> {
    return this.http.get<JobPost>(this.jobpostsUrl + '/' + id);
  }
}
