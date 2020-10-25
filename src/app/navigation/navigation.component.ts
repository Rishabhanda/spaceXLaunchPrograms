import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  launchYears: number[] = [];
  activeLinksState = {
    launch_year: false,
    launch_success: false,
    land_success: false,
  };

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.launchYears = this.navigationService.getLaunchYears(2006, 2020);
  }
}
