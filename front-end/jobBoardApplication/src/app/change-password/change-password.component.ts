import { Component } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private profileService: ProfileService) { }

  profile!: Profile;

  getVal(currentP: string, newP: string, newP_2: string) {
    this.profileService.findById(2).subscribe(data => this.profile = data);

    if (newP == newP_2 && this.profile.password == currentP && newP != currentP) {
      this.profile.password = newP;
    } else {

    }

    this.profileService.updateProfile(1, this.profile);

  }
}
