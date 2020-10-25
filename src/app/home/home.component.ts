import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  launchedMissions;
  subscription: Subscription;

  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.pipe(
      switchMap((queryParams) => {
        return this.homeService.getAllLaunchedMissions(queryParams);
      })
    ).subscribe(
      (data) => { this.launchedMissions = data; },
      (err) => { console.log(err); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
