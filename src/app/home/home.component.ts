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
  loadingText = '';

  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.pipe(
      switchMap((queryParams) => {
        this.loadingText = 'LOADING...';
        return this.homeService.getAllLaunchedMissions(queryParams);
      })
    ).subscribe(
      (data) => {
        this.launchedMissions = data;
        this.loadingText = '';
        this.scrollToTop();
      },
      (err) => {
        console.log(err);
        this.loadingText = '';
      });
  }

  scrollToTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 0);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
