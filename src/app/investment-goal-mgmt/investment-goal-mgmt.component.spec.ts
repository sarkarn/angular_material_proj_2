import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentGoalMgmtComponent } from './investment-goal-mgmt.component';

describe('InvestmentGoalMgmtComponent', () => {
  let component: InvestmentGoalMgmtComponent;
  let fixture: ComponentFixture<InvestmentGoalMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentGoalMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentGoalMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
