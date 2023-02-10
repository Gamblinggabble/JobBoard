import { Component, OnChanges, Input, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title = 'jobBoardApplication';
  @Input() isLoggedIn = false;

  constructor() { }

  resetId() : void {
    LoginPageComponent.setIDToMinusOne();
  }

  ngAfterContentChecked() {
    console.log("ngafterviewinit is fired");
    if(LoginPageComponent.getID() != null) {
      console.log("login page component is not null");
       this.isLoggedIn = true; 
    } else{
    console.log("login page component is null");
    }
  }

  
   
}
