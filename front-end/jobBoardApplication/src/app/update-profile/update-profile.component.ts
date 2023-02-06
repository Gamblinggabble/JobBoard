import { Component } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

constructor(private profileService: ProfileService){} 

profile1 = {
    id: 12,
    firstName: " ",
    lastName: " ",
    email: " ",
    password: " "
    };

getVal(fName:string,lName:string,email:string)
  {

      this.profile1 = {
      id: 12,
      firstName: fName,
      lastName: lName,
      email: email,
      password: " "
      };

      this.profileService.addProfile(this.profile1);
  
  }

}
