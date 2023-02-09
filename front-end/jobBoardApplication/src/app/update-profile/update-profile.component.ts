import { Component } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

  constructor(private profileService: ProfileService) { }

  profile!: Profile;

  getVal(fName: string, lName: string, email: string) {

    this.profileService.findById(1).subscribe(data => this.profile = data);

    this.profile = {
      id: this.profile.id,
      firstName: fName,
      lastName: lName,
      email: email,
      password: this.profile.password
    };

    this.profileService.updateProfile(this.profile.id, this.profile);

  }

}
