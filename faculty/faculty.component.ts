import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css',
})
export class FacultyComponent {
  patientsList: any = [];
  constructor(private router: Router) {
    axios.get('http://localhost:3000/').then((res) => {
      console.log(res);
      this.patientsList = res.data;
    });
  }
  add() {
    this.router.navigate(['basicinfo']);
  }
  goBack() {
    this.router.navigate(['login']);
  }
}
