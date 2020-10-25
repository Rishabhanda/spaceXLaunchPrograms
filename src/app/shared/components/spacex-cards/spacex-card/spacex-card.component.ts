import { Component, OnInit, Input } from '@angular/core';
import { LaunchedMission } from '../../../models/launched-mission.model';

@Component({
  selector: 'app-spacex-card',
  templateUrl: './spacex-card.component.html',
  styleUrls: ['./spacex-card.component.css']
})
export class SpacexCardComponent implements OnInit {

  @Input() launchedMission: LaunchedMission;
  constructor() { }

  ngOnInit() {
  }

}
