import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobBoardApplication';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/hello').subscribe(data => {
      console.log(data);
    });
  }
}
