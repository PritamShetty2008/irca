import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-family-history-display',
  templateUrl: './family-history-display.component.html',
  styleUrl: './family-history-display.component.css',
})
export class FamilyHistoryDisplayComponent {
  familyHistory: any;
  constructor(private router: ActivatedRoute) {
    this.router.queryParams.subscribe((params) => {
      const familyHistoryId = params['userId'];
      console.log(familyHistoryId);
      axios
        .get(`http://localhost:3000/family-history/${familyHistoryId}`)
        .then((res) => {
          this.familyHistory = res.data;
          console.log(this.familyHistory);
        });
    });
  }
}
