import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  launchYears: number[] = [];

  constructor(private navigationService: NavigationService, private route: Router) { }

  ngOnInit() {
    this.launchYears = this.navigationService.getLaunchYears(2006, 2020);
  }

  onLaunchYearActionTriggered(event: string) {
    this.route.navigate([''], { queryParams: { launch_year: event }, queryParamsHandling: 'merge'});
  }



  onLaunchSuccessActionTriggered(event: string) {
    this.route.navigate([''], { queryParams: { launch_success: event },queryParamsHandling: 'merge'});
  }


  onLandSuccessActionTriggered(event: string) {
    this.route.navigate([''], { queryParams: { land_success: event }, queryParamsHandling: 'merge'});
  }

}
