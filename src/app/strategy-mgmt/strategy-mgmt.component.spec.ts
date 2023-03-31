import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyMgmtComponent } from './strategy-mgmt.component';

describe('StrategyMgmtComponent', () => {
  let component: StrategyMgmtComponent;
  let fixture: ComponentFixture<StrategyMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
