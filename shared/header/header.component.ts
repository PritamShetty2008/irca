// header.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  allowedRoutes = ['/basicinfo', '/medicalhistory', '/familyhistory', '/past'];
  shouldDisplayHeader: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkIfHeaderShouldBeDisplayed();
      });
  }

  private checkIfHeaderShouldBeDisplayed() {
    const currentRoute = this.router.url;
    this.shouldDisplayHeader = this.allowedRoutes.includes(currentRoute);
  }
}
