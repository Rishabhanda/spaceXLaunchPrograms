import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spacex-button',
  templateUrl: './spacex-button.component.html',
  styleUrls: ['./spacex-button.component.css']
})
export class SpacexButtonComponent implements OnInit {

  @Input() content = '';
  @Input() classes = '';

  constructor() { }

  ngOnInit() {
  }

}
