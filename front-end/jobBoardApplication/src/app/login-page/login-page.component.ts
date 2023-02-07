import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private profileService: ProfileService){} 

  profile = {
      id: 12,
      firstName: " ",
      lastName: " ",
      email: " ",
      password: " "
      };
  
  getVal(email:string,password:string)
    {
        const login=this.profileService.findByEmail(email);
        this.profile = {
        id: 12,
        firstName: "",
        lastName: "",
        email: email,
        password: password
        };
  
        this.profileService.addProfile(this.profile);
  
    }
  
}
