import { Component, OnInit, Input } from '@angular/core';
import { LaunchMission } from 'src/app/models/launch-mission.model';

@Component({
  selector: 'app-spacex-cards',
  templateUrl: './spacex-cards.component.html',
  styleUrls: ['./spacex-cards.component.css']
})
export class SpacexCardsComponent implements OnInit {

  @Input() launchedMissions: LaunchMission[] = [];
  constructor() { }

  ngOnInit() {
  }

}
