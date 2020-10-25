import { Component, OnInit } from '@angular/core';
import { FiltersService } from './filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  launchYears: number[] = [];
  activeLinksState = {
    launch_year: false,
    launch_success: false,
    land_success: false,
  };

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    this.launchYears = this.filtersService.getLaunchYears(2006, 2020);
  }
}
