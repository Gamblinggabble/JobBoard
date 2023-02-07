import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

private companyUrl: string;

  constructor(private http: HttpClient) { 
    this.companyUrl = 'http://localhost:4200/api/companies';
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  public findById(id: number): Observable<Company> {
    return this.http.get<Company>(this.companyUrl + '/' + id);
  }

  public addCompany(Company: Company): void{
    this.http.post<Company>(this.companyUrl + "/add",Company)
    .subscribe(
      data => {
        console.log("Company added successfully", data);
      },
      error => {
        console.error("Error adding Company", error);
      }
    ); 
  }


 }
