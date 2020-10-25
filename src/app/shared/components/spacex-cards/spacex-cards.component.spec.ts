import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexCardsComponent } from './spacex-cards.component';

describe('SpacexCardsComponent', () => {
  let component: SpacexCardsComponent;
  let fixture: ComponentFixture<SpacexCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
