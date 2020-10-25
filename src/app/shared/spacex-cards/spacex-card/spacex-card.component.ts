import { Component, OnInit, Input } from '@angular/core';
import { LaunchMission } from 'src/app/models/launch-mission.model';

@Component({
  selector: 'app-spacex-card',
  templateUrl: './spacex-card.component.html',
  styleUrls: ['./spacex-card.component.css']
})
export class SpacexCardComponent implements OnInit {

  @Input() launchedMission: LaunchMission;
  constructor() { }

  ngOnInit() {
  }

}
