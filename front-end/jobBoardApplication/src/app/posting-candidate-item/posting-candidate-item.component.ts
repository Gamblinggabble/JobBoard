import { Component } from '@angular/core';

@Component({
  selector: 'app-posting-candidate-item',
  templateUrl: './posting-candidate-item.component.html',
  styleUrls: ['./posting-candidate-item.component.scss']
})
export class PostingCandidateItemComponent {
  classApplied=false;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }
}
