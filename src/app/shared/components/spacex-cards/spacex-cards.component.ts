import { Component, OnInit, Input } from '@angular/core';
import { LaunchedMission } from '../../models/launched-mission.model';

@Component({
  selector: 'app-spacex-cards',
  templateUrl: './spacex-cards.component.html',
  styleUrls: ['./spacex-cards.component.css']
})
export class SpacexCardsComponent implements OnInit {

  @Input() launchedMissions: LaunchedMission[] = [];
  constructor() { }

  ngOnInit() {
  }

}
