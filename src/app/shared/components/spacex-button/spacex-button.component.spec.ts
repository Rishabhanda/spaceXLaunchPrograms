import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexButtonComponent } from './spacex-button.component';

describe('SpacexButtonComponent', () => {
  let component: SpacexButtonComponent;
  let fixture: ComponentFixture<SpacexButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
